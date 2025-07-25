import { motion } from "framer-motion";
import { CiLocationOn } from "react-icons/ci";
import { HiOutlineMail } from "react-icons/hi";
import { MdPhoneInTalk } from "react-icons/md";
export const ContactForm = () => {
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 100 }}
      transition={{ duration: 1 }}
      className="border-t border-stone-500 p-4 flex justify-end max-md:flex-col max-md:items-end gap-4 mx-4"
    >
      <p className="flex items-center gap-2 text-stone-300">
        <CiLocationOn /> Bhubaneswar, Odisha, India
      </p>
      <a
        className="flex items-center gap-2 text-stone-3000"
        href="mailto:omkardeota@gmail.com"
      >
        <HiOutlineMail /> omkardeota@gmail.com
      </a>
      <a
        className="flex items-center gap-2 text-stone-300"
        href="tel:+919583377227"
      >
        <MdPhoneInTalk />
        +91 9583377227
      </a>
    </motion.div>
  );
};

export default ContactForm;
