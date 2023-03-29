import React from "react";

const Comment = () => {
  return (
    <div name="comment" className="w-full bg-gray-400 p-4 text-white">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto ">
        <div className="pb-8 flex flex-col justify-center">
          <p className="font-bold">
            We'd love to hear from you! If you have any questions, concerns, or
            feedback about our beauty app, please don't hesitate to reach out to
            us.
          </p>
          <p className="py-6 inline border-b-4 border-white">Kindly write your comments below to get in touch</p>
        </div>

        <div className="flex justify-center items-center">
          <form action="" className="flex flex-col w-full">
            <textarea
              rows="10"
              className="p-2 bg-white border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button className="text-white bg-green px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300 bg-green-800 cursor-pointer">
                Leave a comment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Comment;
