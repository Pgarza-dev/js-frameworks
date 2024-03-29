import { BsGithub, BsLinkedin, BsGoogle } from "react-icons/bs";
import Container from "../container/container";
import Logo from "../logo/Logo";
import Image from "next/image";
import payment from "@/app/public/images/payment.png";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="w-full bg-lightModeText text-lightModeSecondary">
      <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-start text-sm">
        <div className="flex flex-col gap-y-4 ">
          <Logo />
          <div className="flex flex-row gap-4 pb-4">
            <a href="https://github.com/Pgarza-dev" target="_blank">
              <span className="inline-flex items-center justify-center rounded-md text-lg hover:bg-white p-1 hover:text-lightModeText">
                <BsGithub />
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/pablo-garza-4a897762/"
              target="_blank">
              <span className="inline-flex items-center justify-center rounded-md text-lg hover:bg-white p-1 hover:text-lightModeText">
                <BsLinkedin />
              </span>
            </a>
            <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank">
              <span className="inline-flex items-center justify-center rounded-md text-lg hover:bg-white p-1 hover:text-lightModeText">
                <BsGoogle />
              </span>
            </a>
          </div>

        </div>
        <div className="py-2">
          <p className="text-lg">Quick Links</p>
          <ul className="text-base font-medium mt-2 flex flex-col gap-y-2">
            <li className="hover:underline underline-offset-4 cursor-pointer">
              <Link href={"/"} aria-label="To home page" className="text-sm">
                Home
              </Link>
            </li>
            <li className="hover:underline underline-offset-4 cursor-pointer">
              <Link
                href={"/checkout"}
                aria-label="To cart page"
                className="text-sm">
                Cart
              </Link>
            </li>
            <li className="hover:underline underline-offset-4 cursor-pointer">
              <Link
                href={"/about"}
                aria-label="To about page"
                className="text-sm">
                About
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-base mb-2">Payment services</p>
          <Image
            src={payment}
            alt="payment image"
            className="w-full h-10 object-contain"
          />
        </div>
        <span className="pt-4">&copy; 2024 Pablo Garza.</span>
      </Container>
    </div>
  );
}
