import { Fragment, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import moment from 'moment';

// IMAGES
import { ReactComponent as StarIcon } from '../imgs/star.svg';
import { ReactComponent as LockIcon } from '../imgs/lock.svg';
import { ReactComponent as UnlockIcon } from '../imgs/unlock.svg';
import { ReactComponent as GithubIcon } from '../imgs/github.svg';

// ----------------------------------------------------------------------------------
// ------------------------------ REPO DETAILS PAGE ---------------------------------
// ----------------------------------------------------------------------------------

function RepoDetailsPage({ open, setOpen, data }) {
  const cancelButtonRef = useRef(null)
  const {
    name,
    owner,
    language,
    description,
    stargazers_count,
    updated_at,
    html_url
  } = data;

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as='div'
        static
        className='fixed z-10 inset-0 overflow-y-auto'
        initialFocus={cancelButtonRef}
        open={open}
        onClose={() => {
          setOpen(false)
        }}
      >
        <div className='flex items-center justify-center min-h-screen text-center block'>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Dialog.Overlay className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
          </Transition.Child>
          {/* This element is to trick the browser into centering the modal contents. */}
          <span className='hidden sm:inline-block sm:align-middle sm:h-screen' aria-hidden='true'>
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            enterTo='opacity-100 translate-y-0 sm:scale-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 translate-y-0 sm:scale-100'
            leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
          >
            <div className='inline-block w-full mx-6 align-bottom rounded-lg text-left overflow-hidden shadow-xl transform transition-all max-w-lg'>
              <div className='bg-white text-black'>
                <div className='py-5 px-8 bg-cardbanner text-white'>
                  <div className='flex justify-center sm:justify-between'>
                    <h1 className='mb-5 text-2xl font-bold'>
                      {name}
                    </h1>
                    <a className='cursor-default' href={html_url} target='_blank' rel="noreferrer">
                      <GithubIcon className='ml-2 sm:ml-0 sm:self-center w-8 h-8 sm:w-10 sm:h-10 cursor-pointer hover:text-black' />
                    </a>
                  </div>
                  <div className='sm:flex text-lg'>
                    <img
                      className='h-full w-full sm:h-28 sm:w-28 rounded-md'
                      src={owner?.avatar_url}
                      alt='user'
                    />
                    <div className='text-center sm:text-left sm:ml-6 self-center mt-4 sm:mt-0'>
                      <h2 className=''>
                        by {owner?.login}
                      </h2>
                      <h3>
                        Language: {language}
                      </h3>
                      <h3>
                        Last Updated: {moment(updated_at).format('YYYY-MM-DD')}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className='px-8 pb-5 pt-3'>
                  <div className='flex justify-between border-b-2 pb-1 mb-1 text-lg font-medium'>
                    <h4 className='hidden sm:inline'>
                      ABOUT REPO
                    </h4>
                    {data?.private ? (
                      <div className='flex'>
                        <LockIcon className='self-center w-5 h-5 mr-1.5' />
                        <h3>Private</h3>
                      </div>
                    ) : (
                      <div className='flex'>
                        <UnlockIcon className='self-center w-5 h-5 mr-1.5' />
                        <h3>Public</h3>
                      </div>)}

                    <div className='flex'>
                      <StarIcon className='self-center w-5 h-5 mr-1.5' />
                      <h3>
                        {stargazers_count}
                      </h3>
                    </div>
                  </div>
                  <p>
                    {description}
                  </p>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export default RepoDetailsPage;