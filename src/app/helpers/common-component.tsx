import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Link from 'next/link'

type CommonComponentProps = {
  activeTab: string;
  children: React.ReactNode;
};

export default function CommonComponent({ activeTab, children }: CommonComponentProps) {

  return (
    <main className='font-poppin background-container'>
      <section className='bg-black py-5 flex justify-between px-10 minWidthNavBar'>
        {/* Start of the app bar */}
        <h1 className='text-xl font-burtons text-white'>Welcome to my personal website!</h1>
        <ul className='flex items-center'>
          <li>
            <a href='https://github.com/Yuanxyyds'>
              <AiFillGithub className='cursor-pointer text-3xl flex justify-center text-white' />
            </a>
          </li>
          <li>
            <a href='https://www.linkedin.com/in/hongyuan-steven-liu/'>
              <AiFillLinkedin className='cursor-pointer text-3xl flex justify-center ml-8 fill-white' />
            </a>
          </li>
          <li>
            <a className='bg-gray-800 text-white px-4 py-2 rounded-md ml-8' href='#'>
              Resume
            </a>
          </li>
        </ul>

      </section>

      {/* The main container with bg image */}
      <section className='flex'>
        {/* First Row */}
        <section className=" bg-gray-100 leftrow-container py-10 px-5">
          {/* Learn About Me */}
          <h1 className=' text-gray-700 mb-4 text-lg font-medium'> Learn About Me</h1>
          <div>
            <Link href="/summary">
              <p
                className={`cursor-pointer mb-2 text-sm ${activeTab === 'summary' ? 'text-gray-800' : 'text-gray-400'
                  }`}>
                {activeTab === 'summary' ? '> Overall Summary' : 'Overall Summary'}
              </p>
            </Link>
          </div>
          <div>
            <Link href="/skill">
              <p
                className={`cursor-pointer mb-2 text-sm ${activeTab === 'skill' ? 'text-gray-800' : 'text-gray-400'
                  }`}>
                {activeTab === 'skill' ? '> Skill Summary' : 'Skill Summary'}
              </p>
            </Link>
          </div>
          <div>
            <Link href="/experience">
              <p
                className={`cursor-pointer mb-2  text-sm ${activeTab === 'experience' ? 'text-gray-800' : 'text-gray-400'
                  }`}>
                {activeTab === 'experience' ? '> Experirence' : 'Experience'}
              </p>
            </Link>
          </div>

          {/* My Projects */}
          <h1 className=' text-gray-700 my-4 text-lg font-medium'> My CS Projects - with Video Explaination</h1>
          <Link href="/project-campusEats">
            <p
              className={`cursor-pointer mb-2 text-sm ${activeTab === 'project-campusEats' ? 'text-gray-800' : 'text-gray-400'
                }`}
            > {activeTab === 'experience' ? '> CampusEats \uD83D\uDC4D' : 'CampusEats \uD83D\uDC4D'}
            </p>
          </Link>
          <div>
            <p
              className={`cursor-pointer mb-2 text-sm ${activeTab === 'project-dtc' ? 'text-gray-800' : 'text-gray-400'
                }`}
            >DTC \uD83D\uDC4D (TBD)
            </p>
          </div>
          <div>
            <p
              className={`cursor-pointer mb-2  text-sm ${activeTab === 'project-web' ? 'text-gray-800' : 'text-gray-400'
                }`}
            > Personal Website \uD83D\uDC4D (TBD)
            </p>
          </div>
          <div>
            <p
              className={`cursor-pointer mb-2  text-sm ${activeTab === 'project-cs' ? 'text-gray-800' : 'text-gray-400'
                }`}
            > Other CS course projects (TBD)
            </p>
          </div>

          <h1 className=' text-gray-700 my-4 text-lg font-medium'> My DS Projects</h1>
          <div>
            <p
              className={`cursor-pointer mb-2  text-sm ${activeTab === 'project-lakes' ? 'text-gray-800' : 'text-gray-400'
                }`}
            > Analyzing Great Lakes Pollution \uD83D\uDC4D (TBD)
            </p>
          </div>

          <div>
            <p
              className={`cursor-pointer mb-2  text-sm ${activeTab === 'project-nlp' ? 'text-gray-800' : 'text-gray-400'
                }`}
            > Identify Abusive Clash Royale Tweets (TBD)
            </p>
          </div>

          <div>
            <p
              className={`cursor-pointer mb-2  text-sm ${activeTab === 'project-nba' ? 'text-gray-800' : 'text-gray-400'
                }`}
            > NBA2K Player Rating Predictions (TBD)
            </p>
          </div>

          <div>
            <p
              className={`cursor-pointer mb-2  text-sm ${activeTab === 'project-ds' ? 'text-gray-800' : 'text-gray-400'
                }`}> Other DS course projects (TBD)
            </p>
          </div>

        </section>
        {/* Second Row */}
        <section className='rightrow-container'>
          {children}
        </section>
      </section>
    </main>
  );

}
