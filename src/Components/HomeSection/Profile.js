import { SiLeetcode } from "react-icons/si";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const Profile = ({value}) => {
  switch (value) {
    case "linkedin":
        return(
            <Link href='https://www.linkedin.com/in/jharahul28/'>
                <FaLinkedin size={32}/>
                <p>LinkedIn</p>
            </Link>
        )
        break;

    case "leetcode":
        return(
            <Link href='https://leetcode.com/u/jharahul_rj/'>
                <SiLeetcode size={32}/> 
                <p>LeetCode</p>
            </Link>
        )
        break;
    
    case "github":
        return(
            <Link href='https://github.com/jharahul-28'>
                <FaGithub size={32}/>
                <p>GitHub</p>
            </Link>
        )
        break;
    default:
        break;
  }
}

export default Profile