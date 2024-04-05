import { Link } from "react-router-dom";
import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import axios from "axios";
import ReactPlayer from "react-player";
import Vimeo from "@u-wave/react-vimeo";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

function Home() {
  const [data, setData] = React.useState(null);

  console.log(data);

  const responseHandler = async () => {
    try {
      const response = await axios.get(
        `http://103.183.75.112/api/directory/dataList`
      );

      setData(response.data.data[0]);
    } catch (error) {
      console.error("Error fetching detail tryout:", error);
    }
  };

  React.useEffect(() => {
    responseHandler();
  }, []);

  return (
    <>
      <div className="bg-cyan-500">
        <div className="bg-white shadow-lg shadow-cyan-600">
          <Header />
        </div>

        <div className="container mx-auto">
          <div className="grid  grid-cols-1 md:grid-cols-3 items-center m-2 md:m-16">
            <div className="md:col-span-2 text-white">
              <h1 className="h1 mb-8 font-bold text-[30px] ">{data?.title}</h1>
              <p >{data?.description}</p>

              <button class="p-2 rounded border-4 mt-10 btn-start mb-10 border-blue-800 bg-blue-800 text-white">
                Mulai Konsultasi
              </button>
            </div>

            <div className="">
              <Card className=" w-auto grid grid-cols-1">
                <CardHeader>
                  <img src={data?.banner} alt="banner" />
                </CardHeader>
                <CardBody className="p-4">
                  <Typography variant="h5" color="blue-gray">
                    EDUNEWTRON
                  </Typography>
                  <Typography className="mt-3 text-justify">
                    Tantang Dirimu, Terangi Masa Depanmu bersama Edunewtron:
                    Menginspirasi, Membangun, dan Mengubah Pendidikan untuk
                    Generasi Mendatang dengan Teknologi Canggih.
                  </Typography>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>

        {/*End of Section 1 */}

        {/*Section 2 */}
        <div className="container mx-auto mt-20">
          <div className="m-20">
          <h1 className="text-xl text-white font-bold mb-2">Playlist</h1>
          <hr className="mb-6 w-16"/>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 -mt-10">
            {data?.playlist.map((item, key) => (
              <div key={key} className="w-auto">
                <Card className=" w-96 h-60 grid grid-cols-1">
                  <CardHeader>
                    {item.type === "image" ? (
                      <img src={item.url} alt="banner" />
                    ) : item.type === "video" ? (
                      <iframe
                        title="Vimeo Video"
                        src={item.url}
                        width="640"
                        height="190"
                        allowFullScreen
                      ></iframe>
                    ) : (
                      <p>Invalid media type</p>
                    )}
                  </CardHeader>
                  <CardBody className="p-4">
                    <Typography
                      variant="h5"
                      color="blue-gray"
                      className="flex items-center justify-center mb-2"
                    >
                      {item.title}
                    </Typography>
                    <Typography className="line-clamp-2">
                      {item.description}
                    </Typography>
                  </CardBody>
                </Card>
              </div>
            ))}
          </div>
        </div>
        {/*End of Section 2 */}

        {/*Section 4 CTA */}
        <div className="grid place-items-center mt-20">
          <div className="box-cta border-4 m-10  border-cyan-600 bg-cyan-600 grid grid-cols-1 md:grid-cols-2 items-center md:m-20 p-20 rounded-tr-xl rounded-bl-xl">
            <div className="text-[12px] text-white text-justify md:text-justify md:px-10 md:text-[23px] md:text-white ">
              <span>
                Saat nya jadi talent unggulan dengan skill teknologi terkini
                bersama
                <span className="text-yellow-300"> Edu Newtronic </span>
              </span>
            </div>
            <div className="grid mt-5 md:grid-cols-1 justify-center md:justify-items-end">
              <Link href={"/talent-list"}>
                <button className="border-4 p-2 btn-cta  border-blue-800 bg-blue-800 text-white rounded-xl">
                  Mulai Dari Sekarang
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/*End of Section 4 */}

      <Footer />
    </>
  );
}

export default Home;
