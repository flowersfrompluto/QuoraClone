import { Link } from "react-router-dom";
// import Button from "../components/Button";
import { FaUser } from "react-icons/fa";
import Navigation from "../components/Navigation";

// REACT ICONS
import { CgGames } from "react-icons/cg";
import { MdGames, MdOutlinePsychology, MdOutlineSportsKabaddi, MdCameraRoll, MdOutlineHistory, MdOutlineAdd } from "react-icons/md";
import { GiMusicSpell } from "react-icons/gi";
import { TiSocialAtCircular } from "react-icons/ti";
import { PiNotePencilThin } from "react-icons/pi";
import { LuPencil } from "react-icons/lu";
import { RiQuestionnaireLine } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";



function Home() {
  return (
    <div>
      <Navigation />
      <div className="page home flex">
        <div className="sidebar">
          <ul className="sideBarHead">
            <li>
              <Link className="link">
                <span>
                  <MdOutlineAdd />
                </span> Create Space</Link>
            </li>
            <li>
              <Link className="link">
                <span>
                  <CgGames />
                </span> Video Games
              </Link>
            </li>
            <li>
              <Link className="link">
                <span>
                  <GiMusicSpell />
                </span> Music
              </Link>
            </li>
            <li>
              <Link className="link">
                <span>
                  <MdOutlinePsychology />
                </span> Psychology
              </Link>
            </li>
            <li>
              <Link className="link">
                <span>
                  <MdGames />
                </span> PC Gaming
              </Link>
            </li>
            <li>
              <Link className="link">
                <span>
                  <MdOutlineSportsKabaddi />
                </span> Sports
              </Link>
            </li>
            <li>
              <Link className="link">
                <span>
                  <MdCameraRoll />
                </span> Photography
              </Link>
            </li>
            <li>
              <Link className="link">
                <span>
                  <MdOutlineHistory />
                </span> History
              </Link>
            </li>
            <li>
              <Link className="link">
                <span>
                  <TiSocialAtCircular />
                </span> Social Network
              </Link>
            </li>
          </ul>
          <ul className="sidebarFoot">
            <div className="flex">
              <li>
                <Link className="link">About</Link>
              </li>
              <li className="bullet">•</li>
              <li>
                <Link className="link">Careers</Link>
              </li>
              <li className="bullet">•</li>
            </div>
            <div className="flex">
              <li>
                <Link className="link">Terms</Link>
              </li>
              <li className="bullet">•</li>
              <li>
                <Link className="link">Privacy</Link>
              </li>
              <li className="bullet">•</li>
            </div>
            <div className="flex">
              <li>
                <Link className="link">Acceptable Use</Link>
              </li>
              <li className="bullet">•</li>
            </div>
            <div className="flex">
              <li>
                <Link className="link">Advertise</Link>
              </li>
              <li className="bullet">•</li>
              <li>
                <Link className="link">Press</Link>
              </li>
              <li className="bullet">•</li>
            </div>
            <li>
              <Link className="link">Your Ad Choices</Link>
            </li>
          </ul>
        </div>
        <div className="mainFeed">
          <div className="newPost">
            <div className="topBtn flex">
              <p>
                <FaUser />
              </p>
              <button>What do you want to ask or share?</button>
            </div>
            <div className="createBtns flex">
              <button>
                <span><RiQuestionnaireLine /></span> Ask
              </button>
              <div className="line">I</div>
              <button>
                <span><PiNotePencilThin /></span> Answer
              </button>
              <div className="line">I</div>
              <button>
                <span><LuPencil /></span> Post
              </button>
            </div>
          </div>

          <div className="feed">
            <div className="postBody">
              <div className="userInfo flex">
                <div>
                  <img src="" alt="" />
                </div>
                <div className="flex">
                  <div>
                    <p>True Love Conquers All</p>
                    <p className="bullet">•</p>
                    <button>Follow</button>
                  </div>
                  <div>
                    <p>Posted by Ana Lorde</p>
                    <p className="bullet">•</p>
                    <p>Oct 20</p>
                  </div>
                </div>
                <div>
                  <button><IoMdClose /></button>
                </div>
              </div>
              <div className="post"></div>
              <div className="actionBtns"></div>
            </div>
          </div>

        </div>
        <div className="ads">empty</div>
      </div>
    </div>
  );
}

export default Home;
