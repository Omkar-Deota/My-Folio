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
      className="border-t border-stone-500 p-4 flex justify-end"
    >
      <div className="flex flex-col gap-1">
        <p className="flex items-center gap-2 text-stone-300">
          <CiLocationOn /> Raipur, Chhattisgarh, India
        </p>
        <p className="flex items-center gap-2 text-stone-300">
          <HiOutlineMail /> omkardeota@gmail.com
        </p>
        <p className="flex items-center gap-2 text-stone-300">
          <MdPhoneInTalk />
          +91 9583377227
        </p>
      </div>
    </motion.div>
  );
};

export default ContactForm;
