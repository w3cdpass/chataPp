import ChataPpMessage from "./ui/MessagesFrom";

const ChataPpLayout = () => {
  return (
    <>
     <div className="grid h-screen grid-cols-5 grid-rows-5 gap-2">
      <div className="bg-gray-400 row-span-5">1</div>
      <div className="flex items-end bg-gray-400 col-span-3 row-span-5 !p-2"><ChataPpMessage/></div>
      <div className="bg-gray-400 row-span-5 col-start-5">3</div>
    </div>
    </>
  );
};

export default ChataPpLayout
