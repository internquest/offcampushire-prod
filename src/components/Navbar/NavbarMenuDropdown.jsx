import Link from "next/link";

const NavbarMenuDropdown = ({ isMenuClicked, closeMenu }) => {
  const handleLinkClick = () => {
    closeMenu();
  };

  return (
    isMenuClicked && (
      <div
        className={` ${!isMenuClicked ? "pointer-events-none -z-20 opacity-0" : "z-20 opacity-100"} transition-opacity duration-300`}
      >
        <div className="absolute inset-0 flex h-screen w-screen flex-col bg-[rgb(255,255,255,1)] pt-14 xl:hidden">
          <div className="mt-5 flex w-full flex-col items-center justify-center gap-y-5 px-4">
            <Link
              href={"/about"}
              className="w-full transition-all"
              onClick={handleLinkClick}
            >
              <div className="flex w-full items-center justify-center rounded-full bg-custom-gradient py-5">
                <span className="text-[18px] font-semibold leading-[1.1] text-white">
                  About us
                </span>
              </div>
            </Link>
            <Link
              href={"/students"}
              className="w-full transition-all"
              onClick={handleLinkClick}
            >
              <div className="flex w-full items-center justify-center rounded-full bg-custom-gradient py-5">
                <span className="text-[18px] font-semibold leading-[1.1] text-white">
                  For Students
                </span>
              </div>
            </Link>
            <Link
              href={"/colleges"}
              className="w-full transition-all"
              onClick={handleLinkClick}
            >
              <div className="flex w-full items-center justify-center rounded-full bg-custom-gradient py-5">
                <span className="text-[18px] font-semibold leading-[1.1] text-white">
                  College
                </span>
              </div>
            </Link>
            <Link
              href={"/ambassador"}
              className="w-full transition-all"
              onClick={handleLinkClick}
            >
              <div className="flex w-full items-center justify-center rounded-full bg-custom-gradient py-5">
                <span className="text-[18px] font-semibold leading-[1.1] text-white">
                  Ambassador
                </span>
              </div>
            </Link>
            <Link
              href={"/membership"}
              className="w-full transition-all"
              onClick={handleLinkClick}
            >
              <div className="flex w-full items-center justify-center rounded-full bg-custom-gradient py-5">
                <span className="text-[18px] font-semibold leading-[1.1] text-white">
                  Membership
                </span>
              </div>
            </Link>
          </div>
          <div className="pointer-events-auto fixed bottom-0 left-0 flex w-full flex-col-reverse gap-2 bg-[rgb(255,255,255,1)] p-6 opacity-100 transition-opacity">
            <a href="" className="w-full" onClick={handleLinkClick}>
              <button className="focus:shadow-purple group pointer-events-auto relative h-fit w-full rounded-lg transition-all">
                <span className="flex flex-row items-center justify-center gap-2 rounded-lg bg-transparent px-4 py-3 text-[14px] font-bold leading-none text-[#020617] transition-all hover:bg-gray-100 hover:text-gray-700 active:bg-gray-50 active:bg-clip-text active:text-blue-400 active:text-transparent active:shadow-md">
                  Sign in
                </span>
              </button>
            </a>
            <Link
              href="/get-started"
              className="w-full"
              onClick={handleLinkClick}
            >
              <button className="focus:shadow-purple group pointer-events-auto relative h-fit w-full rounded-lg transition-all">
                <span
                  className="from-gradient-vibrant-blue-100 to-gradient-vibrant-blue-200 flex flex-row items-center justify-center gap-2 rounded-lg bg-gradient-to-br px-4 py-3 text-[14px] font-bold leading-none text-[#FFFFFF] transition-all hover:bg-clip-text hover:text-transparent hover:shadow-lg"
                  style={{
                    backgroundImage:
                      "linear-gradient(to bottom right, #05f, #21d6ef)",
                  }}
                >
                  Get Started
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    )
  );
};

export default NavbarMenuDropdown;
