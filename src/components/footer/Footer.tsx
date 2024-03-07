import { BsGithub, BsLinkedin, BsGoogle } from "react-icons/bs";
import Container from "../container/Container";
import Logo from "../logo/Logo";
import Image from "next/image";
import payment from "@/images/payment.png";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="w-full bg-lightModeText text-lightModeSecondary">
      <Container className="grid grid-col-1 md:grid-col-2 lg:grid-col-3 xl:grid-cols-3 gap-5 ">
        <div className="flex flex-col gap-y-4 ">
          <Logo />
          <div>
            <a href="https://github.com/Pgarza-dev" target="_blank">
              <span className="socialIcons">
                <BsGithub />
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/pablo-garza-4a897762/"
              target="_blank">
              <span className="socialIcons">
                <BsLinkedin />
              </span>
            </a>
            <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank">
              <span className="socialIcons">
                <BsGoogle />
              </span>
            </a>
          </div>
          <span>&copy; {new Date().getFullYear()} Pablo Garza.</span>
        </div>
        <div>
          <p className="text-lg">Quick Links</p>
          <ul className="text-base font-medium mt-2 flex flex-col gap-y-2">
            <Link href={"/"}>
              <li className="hover:underline underline-offset-4 cursor-pointer">
                Home
              </li>
            </Link>
            <Link href={"/cart"}>
              <li className="hover:underline underline-offset-4 cursor-pointer">
                Cart
              </li>
            </Link>
            <Link href={"/about"}>
              <li className="hover:underline underline-offset-4 cursor-pointer">
                About
              </li>
            </Link>
          </ul>
        </div>
        <div>
          <p className="text-lg mb-2">Payment services</p>
          <Image
            src={payment}
            alt="payment image"
            className="w-full h-10 object-cover"
          />
        </div>
      </Container>
    </div>
  );
}
