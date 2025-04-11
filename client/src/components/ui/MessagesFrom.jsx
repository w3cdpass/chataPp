const ChatLayout = () => {
  return (
    <div className="flex items-center justify-between w-full !p-3 bg-gray-200 rounded-lg shadow-md">
      <div><i className="fa-solid fa-face-smile text-red-200"></i></div>
      <div><input type="text" placeholder="Type something" className="outline-none border-none focus:ring-0" /></div>
      <div className="flex items-center justify-center !gap-7 w-1/3">
      <div><i className="fa-solid fa-camera text-pink-200 text-shadow-lg/20"></i></div>
      <div><i className="fa-solid fa-paperclip text-pink-200 text-shadow-lg/20"></i></div>
      <div className=""><i className="fa-solid fa-microphone text-pink-200 underline text-shadow-lg/20"></i></div>
      </div>
    </div>
  );
};

export default ChatLayout;
