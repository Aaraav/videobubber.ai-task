import React from 'react';

export default function Upvote() {
  const [show, setShow] = React.useState(true);

  const handleClose = () => {
    setShow(false);
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center absolute" style={{ display: show ? 'flex' : 'none' }}>
      <div className="absolute w-screen h-screen bg-black opacity-35"></div>
      <div className="w-[50%] h-[50%] bg-white flex flex-col items-center justify-center z-10">
        <img src="https://ph-static.imgix.net/category-tech/kitty.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=100&h=92&fit=max&dpr=1" />
        <h1 className="mt-10">Please verify your email in order to vote</h1>
        <p className="mt-10 w-[80%]">If you need to update the email linked to your account, go to your profile.</p>
        <button className="bg-orange-500 mt-10 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded h-12 w-[150px]">
          Confirm email
        </button>
        <button className="absolute text-2xl bg-white rounded-full  top-2 left-2 text-black font-bold py-2 px-4 " onClick={handleClose}>
          x
        </button>
      </div>
    </div>
  );
}