import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetupPage = () => {
  const addMeetup = (data) => {
    console.log(data);
  };

  return <NewMeetupForm onAddMeetup={addMeetup}></NewMeetupForm>;
};

export default NewMeetupPage;
