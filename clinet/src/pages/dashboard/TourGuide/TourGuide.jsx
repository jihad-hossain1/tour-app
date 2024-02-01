import React, { useState } from "react";
import { getClient } from "../../../router/ClientRoute";
import { useQuery } from "@apollo/client";
import { GET_CLIENT } from "../../../queries/clientsQuery";
import TourGuideProfileForm from "./action/TourGuideProfileForm";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import UpdateProfilePhoto from "./action/UpdateProfilePhoto";
import UploadTourImages from "./action/UploadTourImages";


const TourGuide = () => {
  const [isClient, setClient] = useState(getClient());

  const { loading, error, data } = useQuery(GET_CLIENT, {
    variables: { id: isClient?.id },
  });

  const clientProfile = data?.client?.clientProfile;

  const tourGuideContribution = clientProfile?.tourGuideContribution;

  const totalImages = clientProfile?.images?.flatMap((item) => item?.urls);

  // console.log(tourGuideContribution);

  console.log("user info: ", data);

  return (
    <>
      {/* add tour guide profile  */}
      <TourGuideProfileForm userData={data} cid={isClient?.id} />

      {loading ? (
        <>
          <p>Loading...</p>
        </>
      ) : (
        <div className="flex flex-col gap-3">
          <UpdateProfilePhoto
            profileImage={clientProfile?.profileImage}
            clientId={data?.client?.id}
            clientProfileID={clientProfile?.id}
          />
          <div className="flex gap-4 items-center">
            <Link
              to={`/dashboard/tourguide/profile-update/${data?.client?.id}`}
              className={data?.client?.clientProfile ? "block w-fit" : "hidden"}
            >
              <Button variant="outlined" color="success">
                Profile Update
              </Button>
            </Link>

            <Link
              to={`/dashboard/tourguide/addtourspotplace/${data?.client?.id}`}
              className={data?.client?.clientProfile ? "block w-fit" : "hidden"}
            >
              <Button variant="outlined" color="success">
                Add TourPlace
              </Button>
            </Link>

            <UploadTourImages
              tourGuideContribution={tourGuideContribution}
              clientId={data?.client?.id}
              clientProfileID={clientProfile?.id}
            />
          </div>
          <h4>
            <span className="font-semibold">Full Name:</span>{" "}
            {data?.client?.name}
          </h4>
          <h4>
            <span className="font-semibold">Phone:</span> {data?.client?.phone}
          </h4>
          <h4>
            <span className="font-semibold">Email:</span> {data?.client?.email}
          </h4>
          <h4>
            <span className="font-semibold">User Type:</span>{" "}
            {data?.client?.clientType}
          </h4>
          <h4>
            <span className="font-semibold">User Role:</span>{" "}
            {data?.client?.role}
          </h4>
          {data?.client?.clientProfile && (
            <main className="flex flex-col gap-3">
              <p>
                <span className="font-semibold">Tour Type:</span>{" "}
                {clientProfile?.tourGuideInstructionType}
              </p>
              <p>
                <span className="font-semibold">Tour Member:</span> Up to{" "}
                {clientProfile?.uptoPeople} people
              </p>
              <div className="flex gap-2 items-center">
                <span className="font-semibold">Language:</span>{" "}
                <div className="flex gap-3">
                  {clientProfile?.languages?.map((ite, index) => (
                    <p key={index}>{ite},</p>
                  ))}
                </div>
              </div>
              <p>
                <span className="font-semibold">Response Time:</span>{" "}
                {clientProfile?.responseTime} hours 30 min
              </p>
              <p>
                <span className="font-semibold">Provide Location:</span>{" "}
                {clientProfile?.city?.name}
              </p>
              <p>
                <span className="font-semibold">About:</span>{" "}
                {clientProfile?.description}
              </p>
              <section>
                <p className="flex items-center gap-2">
                  <span className="font-semibold">Total Uploaded Images:</span>
                  <span className="">{totalImages?.length || 0}</span>
                </p>
                <div className="flex flex-col gap-2">
                  {clientProfile?.images?.map((item) => (
                    <div key={item?.id}>
                      <h4>{item?.title}</h4>
                      <div className="flex gap-3">
                        {item?.urls?.map((ite) => (
                          <img
                            key={ite?.id}
                            src={ite?.image}
                            alt="tour photo"
                            className="w-20 rounded-md"
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
                <section>
                  <h4> Total Tour Contribute Area: {tourGuideContribution?.length || 0} </h4>
                <div className="flex flex-col gap-3">
                  {tourGuideContribution?.map((contribute) => (
                    <div key={contribute?.id}>
                      <h4>{contribute?.title}</h4>
                    </div>
                  ))}
                </div>
              </section>
            </main>
          )}
        </div>
      )}
    </>
  );
};

export default TourGuide;
