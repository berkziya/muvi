export default function Index() {
  return (
    <form
      action='https://airform.io/muvi@berk.org.tr'
      method='post'
      className='flex flex-col space-y-4'
    >
      <input
        type='text'
        name='name'
        placeholder='Enter your name'
        className='text-background-800 p-1'
      />
      <textarea
        name='message'
        placeholder='Enter your message'
        className='text-background-800 p-1'
      ></textarea>
      <button>Send</button>
    </form>
  );
}
