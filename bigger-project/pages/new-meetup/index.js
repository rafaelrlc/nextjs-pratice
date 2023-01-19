import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { useRouter } from "next/router";
import { useState, Fragment } from "react";
import Head from "next/head";
const NewMeetupPage = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const addMeetup = async (enteredMeetupData) => {
    setIsLoading(true);
    const response = await fetch("api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log(data);

    setIsLoading(false);
    router.push("/");
  };

  return (
    <Fragment>
      <Head>
        <title>Add a New Meetup</title>
        <meta name="description" content="Add your own Meetup."></meta>
      </Head>
      <NewMeetupForm
        onAddMeetup={addMeetup}
        isLoading={isLoading}
      ></NewMeetupForm>
    </Fragment>
  );
};

export default NewMeetupPage;
