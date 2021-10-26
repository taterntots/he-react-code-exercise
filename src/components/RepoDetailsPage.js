import { Fragment, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'

// IMAGES
import { ReactComponent as StarIcon } from '../imgs/star.svg';

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
    stargazers_count
  } = data;
  console.log('WOOT', data)

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
            <div className='inline-block w-full mx-6 align-bottom rounded-lg text-left overflow-hidden shadow-xl transform transition-all mb-6 mt-20 sm:mt-20 max-w-lg'>
              <div className='p-7 bg-cardbanner text-white'>
                <h1 className=''>
                  {name}
                </h1>
                <div>
                </div>
                <img
                  className='h-full w-full sm:h-28 sm:w-28 rounded-tl-md rounded-tr-md sm:rounded-tr-none'
                  src={owner.avatar_url}
                  alt='user'
                />
                <h2 className=''>
                  {owner?.login}
                </h2>
                <div className='flex'>
                  <StarIcon className='self-center w-5 h-5 mr-1.5' />
                  <h3 className='font-bold'>
                    {stargazers_count}
                  </h3>
                </div>
                <h3>
                  {language}
                </h3>
                <p>
                  {description}
                </p>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export default RepoDetailsPage;