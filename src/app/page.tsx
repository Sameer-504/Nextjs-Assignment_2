export default function Home() {
  return (
    <div className="flex flex-col items-center px-16 bg-[#252B42] overflow-hidden">
      <nav className="p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-[24px] font-bold top-[13px] left-[136px]">
            <span>BrandName</span>
          </div>

          <div className="space-x-8 text-white hidden mr-[450px] md:flex ml-16 gap-21 text-[14px] leading-[24px] mt-[16px]">
            <span>Home</span>
            <span>Product</span>
            <span>Pricing</span>
            <span>Contact</span>
          </div>

          <div className="space-x-4 ">
            <span className="text-[#FFFFFF] text-[14px] hover:text-[#CCCCCC] mr-2 top-[16px] ">
              Login
            </span>
            <button className="bg-[#23A6F0] text-white px-4 py-2 rounded-[5px] text-[14px] gap-[45px] t-[3px]">
              JOIN US
            </button>
          </div>
        </div>
      </nav>

      <div className="flex flex-col items-center gap-[40px] mt-[104px]">
        <div className="text-center">
          <div className="text-[#35A6F0] text-[16px] font-bold">Welcome</div>
          <p className="text-[58px] font-bold text-[#FFFFFF] leading-[80px] mt-4">
            Selling on the <br /> Internet Like a Pro
          </p>
          <p className="text-[#FFFFFF] mt-4 max-w-[542px] mx-auto leading-[30px]">
            We know how large objects will act, but things on a <br />
            small scale just do not act that way.
          </p>
          <div className="flex space-x-4 mt-[40px] justify-center items-center">
            <button className="bg-[#35A6F0] text-white px-6 py-2 rounded-[5px]">
              Get Quote Now
            </button>
            <button className="border border-[#35A6F0] text-[#35A6F0] px-6 py-2 rounded-[5px]">
              {" "}
              Learn More
            </button>
          </div>

          {/*Cards Section*/}

          <div className="flex flex-wrap justify-center mt-[80px] gap-[30px] mb-[80px]">
            {/* First Card */}

            <div className="bg-white text-black p-[35px] rounded-lg shadow-md w-[328px]">
              <div className="w-20 h-20 rounded-xl bg-[#FCEBEB] mx-auto mc-4 ml-2"></div>
              <h2 className="font-bold mt-[20px]">training Courses</h2>
              <div className="h-[2px] bg-[#E74040] w-[50px] my-[10px]"></div>
              <p>
                The gradual accumulation of information about atomic and
                small-scale behaviour...
              </p>
            </div>

            {/* Second Card */}

            <div className="bg-white text-black p-[35px] rounded-lg shadow-md w-[328px]">
              <div className="w-20 h-20 rounded-xl bg-[#B9EAAB] mx-auto mc-4 ml-2"></div>
              <h2 className="font-bold mt-[20px]">2,769 online courses</h2>
              <div className="h-[2px] bg-[#E74040] w-[50px] my-[10px]"></div>
              <p>
                The gradual accumulation of information about atomic and
                small-scale behaviour...
              </p>
            </div>

            {/* Third Card */}

            <div className="bg-[#35A6F0] text-white p-[35px] rounded-lg shadow-md w-[328px]">
              <div className="w-20 h-20 rounded-xl bg-[#FFFF] mx-auto mc-4 ml-2"></div>
              <h2 className="font-bold mt-[20px]">training courses</h2>
              <div className="h-[2px] bg-white w-[50px] my-[10px]"></div>
              <p>
                The gradual accumulation of information about atomic and
                small-scale behaviour...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
