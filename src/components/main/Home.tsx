import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

const Home = () => {
  return (
    <div className="flex flex-col w-full px-10 pt-4 pb-10 space-y-10">
      <div className="relative h-[600px] w-full">
        <img
          src="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="h-full w-full rounded-lg object-cover object-bottom brightness-[0.3] "
        />
        <h2 className="text-2xl absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-white border px-4 py-2 rounded-md">
          cipher lab.
        </h2>
      </div>
      <div className="flex justify-around w-full">
        <Card className="w-[350px]">
          <CardHeader>
            <img
              src="https://img.freepik.com/premium-vector/i-love-nepal-logo-design_85216-22.jpg"
              alt=""
              className="h-[200px] w-full object-cover "
            />
          </CardHeader>
          <CardContent className="space-y-2">
            <CardTitle>I love nepal</CardTitle>
            <CardDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              sed consequuntur iusto quas beatae quasi corrupti quisquam,
              excepturi commodi nihil libero officia odio dignissimos quidem at
              praesentium rem deleniti voluptatem.
            </CardDescription>
          </CardContent>
        </Card>
        <Card className="w-[350px]">
          <CardHeader>
            <img
              src="https://img.freepik.com/premium-vector/i-love-nepal-logo-design_85216-22.jpg"
              alt=""
              className="h-[200px] w-full object-cover "
            />
          </CardHeader>
          <CardContent className="space-y-2">
            <CardTitle>I love nepal</CardTitle>
            <CardDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              sed consequuntur iusto quas beatae quasi corrupti quisquam,
              excepturi commodi nihil libero officia odio dignissimos quidem at
              praesentium rem deleniti voluptatem.
            </CardDescription>
          </CardContent>
        </Card>
        <Card className="w-[350px]">
          <CardHeader>
            <img
              src="https://img.freepik.com/premium-vector/i-love-nepal-logo-design_85216-22.jpg"
              alt=""
              className="h-[200px] w-full object-cover "
            />
          </CardHeader>
          <CardContent className="space-y-2">
            <CardTitle>I love nepal</CardTitle>
            <CardDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              sed consequuntur iusto quas beatae quasi corrupti quisquam,
              excepturi commodi nihil libero officia odio dignissimos quidem at
              praesentium rem deleniti voluptatem.
            </CardDescription>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Home;
