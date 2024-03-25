import { Link } from "react-router-dom";
// import Button from "../components/Button";
import { FaUser } from "react-icons/fa";
import Navigation from "../components/Navigation";
import CreatePost from "../components/CreatePost";

// REACT ICONS
import { CgGames } from "react-icons/cg";
import { MdGames, MdOutlinePsychology, MdOutlineSportsKabaddi, MdCameraRoll, MdOutlineHistory, MdOutlineAdd } from "react-icons/md";
import { GiMusicSpell } from "react-icons/gi";
import { TiSocialAtCircular } from "react-icons/ti";
import { PiNotePencilThin, PiArrowFatUpThin, PiArrowFatDownThin } from "react-icons/pi";
import { LuPencil } from "react-icons/lu";
import { FaRegComment } from "react-icons/fa";
import { RiQuestionnaireLine } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { FaUserSecret } from "react-icons/fa6";
import { BsArrowRepeat } from "react-icons/bs";



// IMPORTED IMAGES
import img1 from "../images/img (3).jpg"



function Home() {
  return (
    <div>
      <div className="popUp">
        <div className="postBody">
          <CreatePost />
        </div>
      </div>
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
                <div className="userName flex">
                  <div>
                    <img src="" alt="" />
                    <p><FaUserSecret /></p>
                  </div>
                  <div className="userDetails">
                    <div className="flex">
                      <p>True Love Conquers All</p>
                      <p className="bullet">•</p>
                      <button>Follow</button>
                    </div>
                    <div className="flex">
                      <p>Posted by Ana Lorde</p>
                      <p className="bullet">•</p>
                      <p>Oct 20</p>
                    </div>
                  </div>
                </div>
                <div>
                  <button><IoMdClose /></button>
                </div>
              </div>
              <div className="post">
                <div className="postTxt">
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea illo repellendus similique impedit officiis, rerum porro quidem laboriosam, optio dicta aliquid vitae tenetur, ullam veniam ipsam voluptatum adipisci quasi? Ab, libero! Facilis eius rem odio quidem commodi. Distinctio quae maiores eum unde rem, rerum corporis, recusandae voluptate harum nostrum voluptatem!</p>
                </div>
                <div className="postImage">
                  <img src={img1} alt="" />
                </div>
              </div>
              <div className="actionBtns flex">
                <div className="flex">
                  <button className="upVoteBtn flex">
                    <p className="arrowUp"><PiArrowFatUpThin /></p>
                    Upvote
                    <p className="bullet">•</p>
                    <p>100</p>
                  </button>
                  <button className="downVoteBtn">
                    <PiArrowFatDownThin />
                  </button>
                </div>
                <div className="atnBtn flex">
                  <div>
                    <button className="flex">
                      <FaRegComment />
                      <p className="bullet">•</p>
                      <p>100</p>
                    </button>
                  </div>
                  <div>
                    <button className="flex">
                      <BsArrowRepeat />
                      <p className="bullet">•</p>
                    <p>100</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className="ads">empty</div>
      </div>
      </div>
    </div>
  );
}

export default Home;
