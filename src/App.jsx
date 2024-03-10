import { useEffect, useRef, useState } from "react";
import Input from "components/input";
import { AiFillFacebook } from "react-icons/ai";

export default function App() {
    const ref = useRef();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const enable = username && password;

    useEffect(() => {
        let images = ref.current.querySelectorAll("img"),
            total = images.length,
            current = 0;

        const imageSlider = () => {
            current > 0
                ? images[current - 1].classList.add("opacity-0")
                : images[total - 1].classList.add("opacity-0");
            images[current].classList.remove("opacity-0");
            current === total - 1 ? (current = 0) : (current += 1);
        };
        imageSlider();
        let interval = setInterval(imageSlider, 3000);
        return () => {
            clearInterval(interval);
        };
    }, [ref]);

    return (
        <>
            <div className="h-full w-full gap-x-8 flex flex-wrap overflow-auto items-center justify-center">
                <div className="hidden md:block w-[380px] h-[581px] bg-logo-pattern relative bg-[length:468.32px_634.15px] bg-[top_left_-46px]">
                    <div
                        className="w-[250px] h-[538px] top-[27px] right-[18px] absolute"
                        ref={ref}>
                        <img
                            src={require("./assets/screenshot1.png")}
                            className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-1000 ease-linear"
                            alt="Instagram "
                        />
                        <img
                            src={require("./assets/screenshot2.png")}
                            className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-1000 ease-linear"
                            alt="Instagram "
                        />
                        <img
                            src={require("./assets/screenshot3.png")}
                            className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-1000 ease-linear"
                            alt="Instagram "
                        />
                        <img
                            src={require("./assets/screenshot4.png")}
                            className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-1000 ease-linear"
                            alt="Instagram "
                        />
                    </div>
                </div>
                <div className="w-[350px] grid gap-y-3">
                    <div className="bg-white border px-[40px] py-8">
                        <a
                            href="#"
                            className="flex mb-8 items-center justify-center">
                            <img
                                className="h-[70px]"
                                src={require("./assets/Instagram_logo.svg.png")}
                                alt="a"
                            />
                        </a>
                        <form
                            className="grid gap-y-1.5"
                            onSubmit={(e) => {
                                e.preventDefault();
                            }}>
                            <Input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                label="Phone number, username or email"></Input>

                            <Input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                label="Password"></Input>

                            <button
                                disabled={!enable}
                                className="mt-1 h-[30px] rounded bg-brand disabled:opacity-50 font-medium text-white"
                                type="submit">
                                Log In
                            </button>
                            <div className="flex items-center my-2.5 mb-3.5">
                                <div className="h-px bg-gray-300 flex-1"></div>
                                <span className="px-4 text-sm font-[13px] text-gray-500">
                                    OR
                                </span>
                                <div className="h-px bg-gray-300 flex-1"></div>
                            </div>
                            <a
                                href="#"
                                className="flex justify-center items-center gap-x-2 font-semibold text-facebook text-sm mb-2">
                                <AiFillFacebook size={20} />
                                Log in with Facebook
                            </a>
                            <a
                                href="#"
                                className="text-sm flex items-center justify-center text-link">
                                Forgot password?
                            </a>
                        </form>
                    </div>

                    <div className="bg-white border p-4 text-sm text-center">
                        Don't have an account?{" "}
                        <a href="#" className="font-semibold text-brand">
                            Sign up
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
