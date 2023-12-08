import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
} from "@material-tailwind/react";
import { UsersIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { featuresData, teamData, contactData } from "@/data";
import { Link } from "react-router-dom";
import main from '../pic/main.jpeg';


export function Home() {
  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
      <img src={main} alt="Background" className="absolute top-0 h-full w-full" />
        <div className="absolute top-0 h-full w-full bg-[url(${main})] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h1"
                color="white"
                className="mb-6 font-black"
              >
                The only way to do great work is to love what you do.
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80">
                At Mifotra, we believe in harmonious workplaces where employees and companies work hand in hand.
                Our mission is to empower both parties to resolve issues effectively and
                create a thriving work environment.
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <section className="-mt-32 bg-gray-50 px-4 pb-20 ">
        <div className="container  mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Link to="/Usersignup">
              <FeatureCard
                color="blue"
                title="Employee"

                description=" Employees are the heart and soul of any company. Their dedication and hard work drive the success of the organization"
              />
            </Link>
            <Link to="/Companysignup">
              <FeatureCard
                color="red"
                title="Company"

                description="A company's success is not solely measured by its profits, but by the positive impact it has on its employees' lives and the communities it serves."
              />
            </Link>
            <Link to="/Mifotrasignup">
              <FeatureCard
                color="teal"
                title="Mifotra"

                description="Rwanda's workforce is known for its resilience and determination, contributing to the country's economic growth and development."
              />
            </Link>
          </div>


          <div className="mt-32 flex flex-wrap items-center">
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">

            </div>
            <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
              <Card className="shadow-lg shadow-gray-500/10">

              </Card>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-blue-gray-50/50">
        <Footer />
      </div>
    </>
  );
}

export default Home;
