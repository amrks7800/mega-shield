import { Instagram, Link, Mail, Phone } from "lucide-react"
import illustration from "/contact.png"
import { useRef } from "react"
import { toast } from "react-toastify"

const Contact = () => {
  return (
    <div className="min-h-screen mt-20 p-5">
      <section className="sm:h-[75vh] bg-[#4939DD] -m-5 flex">
        <div className="flex-1 p-5 text-white max-sm:text-center">
          <h1 className="sm:text-5xl text-3xl font-arabic">
            تواصل معنا.
          </h1>
          <p className="sm:text-lg text-base font-arabic my-5">
            نسعي لاجابة كل اسئلة و استفسارات عملائنا من خلال
            وسائل التواصل الخاصة بنا.
          </p>
        </div>
        <div className="flex-1 flex items-end justify-center max-md:hidden">
          <img
            src={illustration}
            alt="illustration"
            className="sm:w-[400px] mb-5"
          />
        </div>
      </section>
      <ContactTable />
    </div>
  )
}
export default Contact

const ContactTable = () => {
  const emailRef = useRef<HTMLSpanElement>(null)
  const phoneRef = useRef<HTMLSpanElement>(null)
  return (
    <div className="shadow-box rounded-md bg-slate-200 relative z-20">
      <div className="flex items-center py-5 px-3 border-b border-solid border-primary-gray">
        <Mail color="#4939DD" size={35} />
        <span
          ref={emailRef}
          className="flex-1 text-black text-lg mx-4 font-bold"
        >
          info@megashield.com
        </span>
        <span
          className="hover:scale-110 cursor-pointer"
          onClick={() => {
            if (emailRef.current) {
              navigator.clipboard.writeText(
                emailRef.current?.innerText
              )
              toast(
                "تم نسخ البريد الالكتروني الي الحافظة",
                {
                  type: "success",
                }
              )
            }
          }}
        >
          <Link color="#4939DD" size={35} />
        </span>
      </div>
      <div className="flex items-center py-5 px-3  border-b border-solid border-primary-gray">
        <Phone color="#4939DD" size={35} />
        <span
          ref={phoneRef}
          className="flex-1 text-black text-lg mx-4 font-bold"
        >
          <bdo dir="ltr">+966 53 937 3016</bdo>
        </span>
        <span
          className="hover:scale-110 cursor-pointer"
          onClick={() => {
            if (phoneRef.current) {
              navigator.clipboard.writeText(
                phoneRef.current?.innerText
              )
              toast("تم نسخ الهاتف ف الحافظة", {
                type: "success",
              })
            }
          }}
        >
          <Link color="#4939DD" size={35} />
        </span>
      </div>
      <div className="flex items-center py-5 px-3">
        <Instagram color="#4939DD" size={35} />
        <span
          ref={phoneRef}
          className="flex-1 text-black text-lg mx-4 font-bold"
        >
          Instagram
        </span>
        <span
          className="hover:scale-110 cursor-pointer"
          onClick={() => {
            if (phoneRef.current) {
              navigator.clipboard.writeText(
                "https://instagram.com/megashieldd?igshid=MzMyNGUyNmU2YQ=="
              )
              open(
                "https://instagram.com/megashieldd?igshid=MzMyNGUyNmU2YQ==",
                "_blank"
              )
            }
          }}
        >
          <Link color="#4939DD" size={35} />
        </span>
      </div>
    </div>
  )
}
