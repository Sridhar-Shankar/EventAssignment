import "./App.css";
// import DateTimePicker from "react-datetime-picker";
import circle from "./assets/circle-check.svg";
import circlecheckcomplete from "./assets/circlecheckcomplete.svg";
import trash from "./assets/trash.svg";
import close from "./assets/close.svg";
import user from "./assets/user.svg";
import profile from "./assets/profile.svg";
import note from "./assets/note.svg";
import horizontal from "./assets/horizontal.svg";
import sent from "./assets/sent.svg";
import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [selectedUser, setSelectedUser] = useState("null");
  const [textArea, setTextArea] = useState("09382049832 www.flowervendor.com");

  const [comment, setComment] = useState(
    "Thanks for assigning me on the task. We'll get the details ironed out"
  );
  const [isEventComplete, setIsEventComplete] = useState(false);

  const users = [
    "Jane Smith",
    "John Doe",
    "Tom Shelby",
    "Arthur king",
    "Tom clark",
  ];

  const handleEventCompletion = () => {
    setIsEventComplete(!isEventComplete);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleTextArea = (e) => {
    setTextArea(e.target.value);
  };

  const handleButtonClick = () => {
    if (!inputValue) return;

    setComment(inputValue);
    setInputValue("");
  };

  return (
    <div className="h-screen bg-gray-950 flex justify-center items-center">
      <div className=" h-[648px] w-[320px] bg-white rounded-xl p-6 gap-5">
        {/* header section */}
        <div className="h-[15px] w-full  flex flex-row justify-between">
          <button onClick={handleEventCompletion}>
            {isEventComplete ? (
              <img src={circlecheckcomplete} alt="circle-check-complete" />
            ) : (
              <img src={circle} alt="circle-check" />
            )}
            {/* <img src={circle} alt="circle-check" /> */}
          </button>
          <div className="flex gap-3">
            <button>
              <img src={trash} alt="trash" className=" w-3" />
            </button>
            <button>
              <img src={close} alt="close" className=" w-2" />
            </button>
          </div>
        </div>

        {/* flower arr section  */}
        <div className=" mt-4 h-24 flex flex-col gap-1 p-2 ">
          <input
            placeholder="Enter the event"
            className="rounded-full border border-[#cecece] p-4 h-[44px] outline-none flex justify-center items-center gap-2 text-lg  font-flower"
          />

          <input
            className="rounded-full border border-[#cecece] h-[45px] outline-none flex flex-row justify-center  items-center p-4 gap-2"
            type="datetime-local"
          />
        </div>

        {/* assign section */}
        <div className="flex flex-row mt-6 justify-between items-center">
          <img src={user} alt="userLogo" />

          <p className="assign italic font-medium text-sm">Assign to:</p>

          <div className="border-[#ededed] border  rounded-full flex gap-6 p-2">
            <img src={profile} alt="" />

            <select
              className="text-[#009379] text-[15px] font-semibold text-sm outline-none"
              value={selectedUser}
              onChange={(e) => setSelectedUser(e.target.value)}
            >
              {users.map((user, index) => (
                <option key={index} value={user}>
                  {user}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* note section */}
        <div className="flex flex-row mt-6 justify-between items-start ">
          <div>
            <img src={note} alt="noteLogo" className="" />
          </div>

          <p className="assign italic font-medium text-sm">Note:</p>

          <textarea
            value={textArea}
            onChange={handleTextArea}
            className="text-[#5A5A5A] flex flex-col font-inter border-[#ededed]  border outline-none  rounded w-48 overflow-hidden  p-2 "
          >
            09382049832 www.flowervendor.com
          </textarea>
        </div>

        {/* hr line */}
        <img src={horizontal} alt="hrLogo" className="mt-6" />

        {/* comments  */}
        <div className=" mt-4 h-4">
          <h1 className="font-inter font-bold italic text-[16px]">Comments</h1>
        </div>

        <div className="mt-5 flex flex-row gap-3 items-start">
          <img src={profile} alt="profileLogo" />

          <div className="flex flex-col  font-inter">
            <p className="text-[#009379] font-semibold text-[12px]">
              Jane Smith
            </p>
            <p className="font-normal text-[11px]">{comment}</p>
          </div>
        </div>

        <div className="flex flex-row mt-4 gap-3 items-start">
          <img src={profile} alt="profileLogo" />

          <div className="flex flex-col font-inter">
            <p className="text-[#009379] font-semibold text-[12px]">
              Jane Smith
            </p>
            <div className="flex flex-row items-center gap-3">
              <p className="font-normal text-[11px]">
                Thanks for assigning me on the task. We'll get the details
                ironed out.
              </p>
              <img
                src={trash}
                alt="trashLogo"
                className="self-start w-5 mt-1"
              />
            </div>
          </div>
        </div>

        {/* last line section  */}

        <div className="flex flex-row gap-2 mt-4 w-full">
          <img src={profile} alt="profileLogo" />

          <div className="flex flex-row justify-between items-center relative">
            <input
              className=" border font-inter text-sm outline-none border-[#cdcdcd] rounded-full h-11 p-4"
              placeholder="Write comment.."
              value={inputValue}
              onChange={handleInputChange}
            />
            <button onClick={handleButtonClick}>
              <img
                src={sent}
                alt="sentLogo"
                className="absolute top-4 right-3 mr-1 w-4"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
