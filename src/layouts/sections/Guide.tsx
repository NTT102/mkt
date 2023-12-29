import { Tab, Disclosure } from "@headlessui/react";
import { CourseTabs } from "../../components";
import { IoIosArrowDown } from "react-icons/io";

const Guide = () => (
    <section className="bg-slate-800 text-white px-4 py-8">
        <div className="max-w-[60rem] min-h-[60vh] mx-auto">
            <h2 className="text-xl text-center first-letter:uppercase font-bold mb-4">
                hướng dẫn
            </h2>
            <Tab.Group>
                {/* Tab header list */}
                <CourseTabs />
                {/* Tab content */}
                <Tab.Panels className="py-6">
                    {/* Tab panel 1 */}
                    <Tab.Panel className="grid gap-2">
                        <Disclosure>
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white text-black px-4 py-2 text-left text-sm font-medium hover:bg-blue-100 focus:outline-none focus-visible:ring focus-visible:ring-blue-500/75">
                                        <span className="block text-base first-letter:uppercase font-semibold">
                                            Bài 1 : Lời nói đầu
                                        </span>
                                        <IoIosArrowDown
                                            className={`${
                                                open
                                                    ? "rotate-180 transform"
                                                    : ""
                                            } h-5 w-5 text-black`}
                                        />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="text-sm text-gray-500">
                                        <p> đang đẩy video lên</p>
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                        <Disclosure>
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white text-black px-4 py-2 text-left text-sm font-medium hover:bg-blue-100 focus:outline-none focus-visible:ring focus-visible:ring-blue-500/75">
                                        <span className="block text-base first-letter:uppercase font-semibold">
                                            Bài 2 : Tìm hiểu về traffic là gì 
                                        </span>
                                        <IoIosArrowDown
                                            className={`${
                                                open
                                                    ? "rotate-180 transform"
                                                    : ""
                                            } h-5 w-5 text-black`}
                                        />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="text-sm text-gray-500">
                                        <iframe
                                            className="w-full aspect-video"
                                            src="https://youtube.com/embed/pcYUADDbbyM?si=SGWGEu-ZDayzg803"
                                            title="YouTube video player"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        ></iframe>
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                        <Disclosure>
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white text-black px-4 py-2 text-left text-sm font-medium hover:bg-blue-100 focus:outline-none focus-visible:ring focus-visible:ring-blue-500/75">
                                        <span className="block text-base first-letter:uppercase font-semibold">
                                            Bài 3 : Bí quyết làm và tìm content vô hạn  
                                            tiêu
                                        </span>
                                        <IoIosArrowDown
                                            className={`${
                                                open
                                                    ? "rotate-180 transform"
                                                    : ""
                                            } h-5 w-5 text-black`}
                                        />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="text-sm text-gray-500">
                                        <iframe
                                            className="w-full aspect-video"
                                            src="https://youtube.com/embed/z4FGRIaEqgI?si=vj6TeB062Iuy7m1R"
                                            title="YouTube video player"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        ></iframe>
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                        <Disclosure>
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white text-black px-4 py-2 text-left text-sm font-medium hover:bg-blue-100 focus:outline-none focus-visible:ring focus-visible:ring-blue-500/75">
                                        <span className="block text-base first-letter:uppercase font-semibold">
                                            Bài 4 : Hiểu về nền tảng , hành vi khách hàng
                                        </span>
                                        <IoIosArrowDown
                                            className={`${
                                                open
                                                    ? "rotate-180 transform"
                                                    : ""
                                            } h-5 w-5 text-black`}
                                        />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="text-sm text-gray-500">
                                        <iframe
                                            className="w-full aspect-video"
                                            src="https://www.youtube.com/embed/e-HGF2W8YPk?si=2WJP3wdKT2MLtI7O"
                                            title="YouTube video player"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        ></iframe>
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                        <Disclosure>
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white text-black px-4 py-2 text-left text-sm font-medium hover:bg-blue-100 focus:outline-none focus-visible:ring focus-visible:ring-blue-500/75">
                                        <span className="block text-base first-letter:uppercase font-semibold">
                                            Bài 5 : Kinh nghiệm xây kênh Tiktok, Facebook
                                        </span>
                                        <IoIosArrowDown
                                            className={`${
                                                open
                                                    ? "rotate-180 transform"
                                                    : ""
                                            } h-5 w-5 text-black`}
                                        />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="text-sm text-gray-500">
                                        <iframe
                                            className="w-full aspect-video"
                                            src="https://www.youtube.com/embed/2DY5ZLt7qA8?si=bzA3DVHdGV643gF9"
                                            title="YouTube video player"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        ></iframe>
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                        <Disclosure>
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white text-black px-4 py-2 text-left text-sm font-medium hover:bg-blue-100 focus:outline-none focus-visible:ring focus-visible:ring-blue-500/75">
                                        <span className="block text-base first-letter:uppercase font-semibold">
                                            Bài 6 : Chuyển văn bản thành giọng nói bằng AI
                                        </span>
                                        <IoIosArrowDown
                                            className={`${
                                                open
                                                    ? "rotate-180 transform"
                                                    : ""
                                            } h-5 w-5 text-black`}
                                        />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="text-sm text-gray-500">
                                        <iframe
                                            className="w-full aspect-video"
                                            src="https://youtube.com/embed/p5MHK3rl6vc?si=rCnNsoXAWoSa8DlB"
                                            title="YouTube video player"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        ></iframe>
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                        <Disclosure>
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white text-black px-4 py-2 text-left text-sm font-medium hover:bg-blue-100 focus:outline-none focus-visible:ring focus-visible:ring-blue-500/75">
                                        <span className="block text-base first-letter:uppercase font-semibold">
                                            Bài 7 : Tạo hình ảnh nhân vật bằng Ai midjourney
                                        </span>
                                        <IoIosArrowDown
                                            className={`${
                                                open
                                                    ? "rotate-180 transform"
                                                    : ""
                                            } h-5 w-5 text-black`}
                                        />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="text-sm text-gray-500">
                                        <iframe
                                            className="w-full aspect-video"
                                            src="https://www.youtube.com/embed/rykAth43w-8?si=AgvZ4WwgFVY5cjvo"
                                            title="YouTube video player"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        ></iframe>
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                        <Disclosure>
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white text-black px-4 py-2 text-left text-sm font-medium hover:bg-blue-100 focus:outline-none focus-visible:ring focus-visible:ring-blue-500/75">
                                        <span className="block text-base first-letter:uppercase font-semibold">
                                            Bài 8 : Ghép nhân vật và âm thành bằng AI D-ID
                                        </span>
                                        <IoIosArrowDown
                                            className={`${
                                                open
                                                    ? "rotate-180 transform"
                                                    : ""
                                            } h-5 w-5 text-black`}
                                        />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="text-sm text-gray-500">
                                        <iframe
                                            className="w-full aspect-video"
                                            src="https://youtube.com/embed/Vz7XGSQSqhY?si=EJ42WIki9oH7tvLz"
                                            title="YouTube video player"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        ></iframe>
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                        <Disclosure>
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white text-black px-4 py-2 text-left text-sm font-medium hover:bg-blue-100 focus:outline-none focus-visible:ring focus-visible:ring-blue-500/75">
                                        <span className="block text-base first-letter:uppercase font-semibold">
                                            Bài 9 : Hướng dẫn xoá logo D-ID
                                        </span>
                                        <IoIosArrowDown
                                            className={`${
                                                open
                                                    ? "rotate-180 transform"
                                                    : ""
                                            } h-5 w-5 text-black`}
                                        />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="text-sm text-gray-500">
                                        <iframe
                                            className="w-full aspect-video"
                                            src="https://www.youtube.com/embed/bVfXCtuGM9A?si=R-w0FOYMXJU6b8BL"
                                            title="YouTube video player"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        ></iframe>
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                        <Disclosure>
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white text-black px-4 py-2 text-left text-sm font-medium hover:bg-blue-100 focus:outline-none focus-visible:ring focus-visible:ring-blue-500/75">
                                        <span className="block text-base first-letter:uppercase font-semibold">
                                            Bài 10 : Hoàn Thiện video trên Capcut
                                        </span>
                                        <IoIosArrowDown
                                            className={`${
                                                open
                                                    ? "rotate-180 transform"
                                                    : ""
                                            } h-5 w-5 text-black`}
                                        />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="text-sm text-gray-500">
                                        <iframe
                                            className="w-full aspect-video"
                                            src="https://youtube.com/embed/cbiF0gge2AU?si=UVbM_qsmEwoZ53ij"
                                            title="YouTube video player"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        ></iframe>
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                        <Disclosure>
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white text-black px-4 py-2 text-left text-sm font-medium hover:bg-blue-100 focus:outline-none focus-visible:ring focus-visible:ring-blue-500/75">
                                        <span className="block text-base first-letter:uppercase font-semibold">
                                            Bài 11 : Cách xây kênh tiktok bắt trend
                                        </span>
                                        <IoIosArrowDown
                                            className={`${
                                                open
                                                    ? "rotate-180 transform"
                                                    : ""
                                            } h-5 w-5 text-black`}
                                        />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="text-sm text-gray-500">
                                        <iframe
                                            className="w-full aspect-video"
                                            src="https://www.youtube.com/embed/bVfXCtuGM9A?si=R-w0FOYMXJU6b8BL"
                                            title="YouTube video player"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        ></iframe>
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                          <Disclosure>
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white text-black px-4 py-2 text-left text-sm font-medium hover:bg-blue-100 focus:outline-none focus-visible:ring focus-visible:ring-blue-500/75">
                                        <span className="block text-base first-letter:uppercase font-semibold">
                                            Bài 12 : Update 2 dạng video hottrend mới Tiktok,Facebook
                                        </span>
                                        <IoIosArrowDown
                                            className={`${
                                                open
                                                    ? "rotate-180 transform"
                                                    : ""
                                            } h-5 w-5 text-black`}
                                        />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="text-sm text-gray-500">
                                        <iframe
                                            className="w-full aspect-video"
                                            src="https://www.youtube.com/embed/bVfXCtuGM9A?si=R-w0FOYMXJU6b8BL"
                                            title="YouTube video player"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        ></iframe>
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                        <Disclosure>
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white text-black px-4 py-2 text-left text-sm font-medium hover:bg-blue-100 focus:outline-none focus-visible:ring focus-visible:ring-blue-500/75">
                                        <span className="block text-base first-letter:uppercase font-semibold">
                                            Bài 13 : Hướng dẫn sử dụng AI Heygen
                                        </span>
                                        <IoIosArrowDown
                                            className={`${
                                                open
                                                    ? "rotate-180 transform"
                                                    : ""
                                            } h-5 w-5 text-black`}
                                        />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="text-sm text-gray-500">
                                        <iframe
                                            className="w-full aspect-video"
                                            src="https://www.youtube.com/embed/bVfXCtuGM9A?si=R-w0FOYMXJU6b8BL"
                                            title="YouTube video player"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        ></iframe>
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                        <Disclosure>
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white text-black px-4 py-2 text-left text-sm font-medium hover:bg-blue-100 focus:outline-none focus-visible:ring focus-visible:ring-blue-500/75">
                                        <span className="block text-base first-letter:uppercase font-semibold">
                                           Bài 14 : Hướng dẫn sử dụng D-ID,V-bee, Heygen miễn phí ( tiết kiệm 20tr đồng )
                                        </span>
                                        <IoIosArrowDown
                                            className={`${
                                                open
                                                    ? "rotate-180 transform"
                                                    : ""
                                            } h-5 w-5 text-black`}
                                        />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="text-sm text-gray-500">
                                        <iframe
                                            className="w-full aspect-video"
                                            src="https://www.youtube.com/embed/bVfXCtuGM9A?si=R-w0FOYMXJU6b8BL"
                                            title="YouTube video player"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        ></iframe>
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                         <Disclosure>
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white text-black px-4 py-2 text-left text-sm font-medium hover:bg-blue-100 focus:outline-none focus-visible:ring focus-visible:ring-blue-500/75">
                                        <span className="block text-base first-letter:uppercase font-semibold">
                                            Bài 15 : Hướng dẫn tạo 1000 tài khoản facebook clone
                                        </span>
                                        <IoIosArrowDown
                                            className={`${
                                                open
                                                    ? "rotate-180 transform"
                                                    : ""
                                            } h-5 w-5 text-black`}
                                        />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="text-sm text-gray-500">
                                        <iframe
                                            className="w-full aspect-video"
                                            src="https://www.youtube.com/embed/bVfXCtuGM9A?si=R-w0FOYMXJU6b8BL"
                                            title="YouTube video player"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        ></iframe>
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                         <Disclosure>
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white text-black px-4 py-2 text-left text-sm font-medium hover:bg-blue-100 focus:outline-none focus-visible:ring focus-visible:ring-blue-500/75">
                                        <span className="block text-base first-letter:uppercase font-semibold">
                                            Bài 16 : Tổng hợp mô hình kiếm tiền thụ động 
                                        </span>
                                        <IoIosArrowDown
                                            className={`${
                                                open
                                                    ? "rotate-180 transform"
                                                    : ""
                                            } h-5 w-5 text-black`}
                                        />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="text-sm text-gray-500">
                                        <iframe
                                            className="w-full aspect-video"
                                            src="https://www.youtube.com/embed/bVfXCtuGM9A?si=R-w0FOYMXJU6b8BL"
                                            title="YouTube video player"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        ></iframe>
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                    </Tab.Panel>
                    {/* Tab panel 2 */}
                    <Tab.Panel className="grid gap-2">
                        <Disclosure>
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white text-black px-4 py-2 text-left text-sm font-medium hover:bg-blue-100 focus:outline-none focus-visible:ring focus-visible:ring-blue-500/75">
                                        <span className="block text-base first-letter:uppercase font-semibold">
                                            Bài 11 : Update 2 dạng video hottrend mới Tiktok,Facebook
                                        </span>
                                        <IoIosArrowDown
                                            className={`${
                                                open
                                                    ? "rotate-180 transform"
                                                    : ""
                                            } h-5 w-5 text-black`}
                                        />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="text-sm text-gray-500">
                                        <iframe
                                            className="w-full aspect-video"
                                            src="https://www.youtube.com/embed/pxIdBTygLJI?si=juFANs-Nuna3VuUV"
                                            title="YouTube video player"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        ></iframe>
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                        <Disclosure>
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white text-black px-4 py-2 text-left text-sm font-medium hover:bg-blue-100 focus:outline-none focus-visible:ring focus-visible:ring-blue-500/75">
                                        <span className="block text-base first-letter:uppercase font-semibold">
                                            Bài 12 : Hướng dẫn sử dụng D-ID,V-bee, Heygen miễn phí ( tiết kiệm 20tr đồng )
                                        </span>
                                        <IoIosArrowDown
                                            className={`${
                                                open
                                                    ? "rotate-180 transform"
                                                    : ""
                                            } h-5 w-5 text-black`}
                                        />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="text-sm text-gray-500">
                                        <iframe
                                            className="w-full aspect-video"
                                            src="https://www.youtube.com/embed/bVfXCtuGM9A?si=R-w0FOYMXJU6b8BL"
                                            title="YouTube video player"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        ></iframe>
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                        <Disclosure>
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white text-black px-4 py-2 text-left text-sm font-medium hover:bg-blue-100 focus:outline-none focus-visible:ring focus-visible:ring-blue-500/75">
                                        <span className="block text-base first-letter:uppercase font-semibold">
                                            hướng dẫn đo các chỉ số bằng đồng hồ
                                            (Life Watch gen 2)
                                        </span>
                                        <IoIosArrowDown
                                            className={`${
                                                open
                                                    ? "rotate-180 transform"
                                                    : ""
                                            } h-5 w-5 text-black`}
                                        />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="text-sm text-gray-500">
                                        <iframe
                                            className="w-full aspect-video"
                                            src="https://www.youtube.com/embed/2DY5ZLt7qA8?si=bzA3DVHdGV643gF9"
                                            title="YouTube video player"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        ></iframe>
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                        <Disclosure>
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white text-black px-4 py-2 text-left text-sm font-medium hover:bg-blue-100 focus:outline-none focus-visible:ring focus-visible:ring-blue-500/75">
                                        <span className="block text-base first-letter:uppercase font-semibold">
                                            hướng dẫn đo các chỉ số bằng vòng
                                            tay (Biosense Band)
                                        </span>
                                        <IoIosArrowDown
                                            className={`${
                                                open
                                                    ? "rotate-180 transform"
                                                    : ""
                                            } h-5 w-5 text-black`}
                                        />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="text-sm text-gray-500">
                                        <iframe
                                            className="w-full aspect-video"
                                            src="https://youtube.com/embed/p5MHK3rl6vc?si=rCnNsoXAWoSa8DlB"
                                            title="YouTube video player"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        ></iframe>
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                        <Disclosure>
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white text-black px-4 py-2 text-left text-sm font-medium hover:bg-blue-100 focus:outline-none focus-visible:ring focus-visible:ring-blue-500/75">
                                        <span className="block text-base first-letter:uppercase font-semibold">
                                            hướng dẫn kích hoạt 4 chỉ số chuyên
                                            sâu
                                        </span>
                                        <IoIosArrowDown
                                            className={`${
                                                open
                                                    ? "rotate-180 transform"
                                                    : ""
                                            } h-5 w-5 text-black`}
                                        />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="text-sm text-gray-500">
                                        <iframe
                                            className="w-full aspect-video"
                                            src="https://www.youtube.com/embed/1zaDC46RxbQ?si=IFyWuWINT00_tBoq"
                                            title="YouTube video player"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        ></iframe>
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                        <Disclosure>
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white text-black px-4 py-2 text-left text-sm font-medium hover:bg-blue-100 focus:outline-none focus-visible:ring focus-visible:ring-blue-500/75">
                                        <span className="block text-base first-letter:uppercase font-semibold">
                                            hướng dẫn khởi động lại vòng tay
                                        </span>
                                        <IoIosArrowDown
                                            className={`${
                                                open
                                                    ? "rotate-180 transform"
                                                    : ""
                                            } h-5 w-5 text-black`}
                                        />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="text-sm text-gray-500">
                                        <iframe
                                            className="w-full aspect-video"
                                            src="https://www.youtube.com/embed/1FSXTsNoy14?si=MEd1dLFAzQAtjpu5"
                                            title="YouTube video player"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        ></iframe>
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                    </Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
        </div>
    </section>
);

export default Guide;
