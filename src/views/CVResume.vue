<script lang="ts" setup>
import CVContacts from '@/components/CVContacts.vue'
import CVDownload from '@/components/CVDownload.vue'
import CVHistoryItem from '@/components/CVHistoryItem.vue'
import CVItem from '@/components/CVItem.vue'
import CVLink from '@/components/CVLink.vue'
import CVListItem from '@/components/CVListItem.vue'
import CVSection from '@/components/CVSection.vue'
import CVText from '@/components/CVText.vue'
import CVTimeline from '@/components/CVTimeline.vue'
import CVReferee from '@/components/CVReferee.vue'
import CVQualification from '@/components/CVQualification.vue'
import CVExpandAll from '@/components/CVExpandAll.vue'
</script>

<template>
  <main>
    <CVExpandAll />
    <CVItem :expanded="true" icon="info" icon_colour="slateblue" title="Contact Details">
      <CVContacts
        email="gordy.wills@gmail.com"
        led-in="https://www.linkedin.com/in/gordywills/"
        tel="+44 7710 416 608"
        web="https://gordywills.com/"
      />
    </CVItem>
    <CVItem icon="article" icon_colour="darkolivegreen" title="Introduction">
      <CVText>I lead teams that get hard things done.</CVText>
      <CVText>
        While I briefly ventured into TV production, technology has always been central to my career, from my time as an
        officer in the Royal Signals to my roles as a software engineer and engineering leader. However, it's not the
        technology itself that drives me; it's the satisfaction of guiding teams of humans to to accomplish challenging feats
        that no individual though they could do.
      </CVText>
      <CVText>
        My foundational experience in the Army instilled in me a deep appreciation for commitment, loyalty, integrity, and
        professionalism, values I actively seek in others. For over 25 years, I've focused on cultivating business cultures
        where people feel a sense of safety and belonging. This involves building a platform of trust, fostering individual
        growth in skills and confidence, and creating cohesive teams that enjoy working and playing together.
      </CVText>
      <CVText>
        As a lifelong learner, or perhaps "nerd adjacent", I love new things. I'm passionate about exploring new ideas across
        all fields, though primarily technology. We learn more things pushing boundaries than staying safely inside them. A key
        goal of mine, in any organisation, is to foster a learning-oriented mindset across all business functions. Over 25
        years I have had my share of failed experiments, but these have led me to insights about myself and how to lead
        technology businesses effectively.
      </CVText>
      <CVText>
        I am also a human, I enjoy long distance hiking, tackling a crossword and engaging with cerebral computer games. My
        wonderful partner inspires me everyday.
      </CVText>
    </CVItem>
    <CVItem icon="person_celebrate" icon_colour="darkgoldenrod" title="Skills">
      <CVItem icon="mindfulness" icon_colour="cornflowerblue" level="two" title="Business Skills">
        <CVSection size="medium" title="Leadership">
          <CVListItem title="Agile">
            From Scrummaster of a single team to leading an engineering department of 5 Scrum teams, I have the experience to
            manage the processes that back up Agile. Focusing on quality, I work to empower the front line decision makers to
            do the right thing in a dynamic situation and ensure we deliver value. I then work to ensure that these decisions
            are backed across all business functions. I have worked with C-grade executives, sales and marketing teams and with
            professional services teams to help them understand how to be more Agile and how to get the most from working with
            an Agile engine room.
          </CVListItem>
          <CVListItem title="Coaching">
            Line management can all too easily become a transactional interaction of setting tasks and approving leave; I coach
            my direct reports and others to facilitate better engagement and empowerment ultimately driving productivity and
            personal effectiveness. I use active listening methods to pursue an agenda of autonomy, mastery and purpose for
            those that I am coaching and seek to balance directive instruction with collaboration.
          </CVListItem>
          <CVListItem title="The Servant">
            Servant leadership is fundamental to an Agile mindset and to great coaching. My wide range of experiences in the
            military, TV, software development and charity volunteering have given me the confidence to trust front line
            decision makers and the understanding to be able to facilitate the conditions for them to succeed. These behaviours
            are key to an engaged workforce and a sustainable productive environment.
          </CVListItem>
          <CVListItem title="Project Management">
            From military procurement through documentary film making to software delivery, I have project management
            experience in many different contexts. I am familiar with PRINCE2, Gantt Chart, Balanced Scorecard, ITIL, Critical
            Path, and latterly Scrum and Kanban methodologies for managing projects.
          </CVListItem>
        </CVSection>
        <CVSection size="medium" title="Partnership and Relationship Building">
          <CVText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a pellentesque risus. Mauris quis turpis arcu. Proin
            orci mi, varius a nibh vitae, vestibulum maximus mi. Aliquam erat volutpat. Fusce consectetur volutpat leo, ac
            convallis lorem. Fusce id malesuada lorem,
          </CVText>
        </CVSection>
        <CVSection size="medium" title="Business Planning and Budgeting">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a pellentesque risus. Mauris quis turpis arcu. Proin
          orci mi, varius a nibh vitae, vestibulum maximus mi. Aliquam erat volutpat. Fusce consectetur volutpat leo, ac
          convallis lorem. Fusce id malesuada lorem,
        </CVSection>
        <CVSection size="medium" title="Strategic and Operational Goal setting">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a pellentesque risus. Mauris quis turpis arcu. Proin
          orci mi, varius a nibh vitae, vestibulum maximus mi. Aliquam erat volutpat. Fusce consectetur volutpat leo, ac
          convallis lorem. Fusce id malesuada lorem,
        </CVSection>
        <CVSection size="medium" title="Recruitment">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a pellentesque risus. Mauris quis turpis arcu. Proin
          orci mi, varius a nibh vitae, vestibulum maximus mi. Aliquam erat volutpat. Fusce consectetur volutpat leo, ac
          convallis lorem. Fusce id malesuada lorem,
        </CVSection>
        <CVSection size="medium" title="Culture Creation">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a pellentesque risus. Mauris quis turpis arcu. Proin
          orci mi, varius a nibh vitae, vestibulum maximus mi. Aliquam erat volutpat. Fusce consectetur volutpat leo, ac
          convallis lorem. Fusce id malesuada lorem,
        </CVSection>
        <CVSection size="medium" title="Agile Thinking, Behaviour and Coaching">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a pellentesque risus. Mauris quis turpis arcu. Proin
          orci mi, varius a nibh vitae, vestibulum maximus mi. Aliquam erat volutpat. Fusce consectetur volutpat leo, ac
          convallis lorem. Fusce id malesuada lorem,
        </CVSection>
      </CVItem>
      <CVItem icon="data_object" icon_colour="saddlebrown" level="two" title="Technical Skills">
        <CVSection size="medium" title="System Architecture">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a pellentesque risus. Mauris quis turpis arcu. Proin
          orci mi, varius a nibh vitae, vestibulum maximus mi. Aliquam erat volutpat. Fusce consectetur volutpat leo, ac
          convallis lorem. Fusce id malesuada lorem,
        </CVSection>
        <CVSection size="medium" title="Systems Integaration">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a pellentesque risus. Mauris quis turpis arcu. Proin
          orci mi, varius a nibh vitae, vestibulum maximus mi. Aliquam erat volutpat. Fusce consectetur volutpat leo, ac
          convallis lorem. Fusce id malesuada lorem,
        </CVSection>
        <CVSection size="medium" title="DevOps Patterns">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a pellentesque risus. Mauris quis turpis arcu. Proin
          orci mi, varius a nibh vitae, vestibulum maximus mi. Aliquam erat volutpat. Fusce consectetur volutpat leo, ac
          convallis lorem. Fusce id malesuada lorem,
        </CVSection>
        <CVSection size="medium" title="Site Reliability Engineering">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a pellentesque risus. Mauris quis turpis arcu. Proin
          orci mi, varius a nibh vitae, vestibulum maximus mi. Aliquam erat volutpat. Fusce consectetur volutpat leo, ac
          convallis lorem. Fusce id malesuada lorem,
        </CVSection>
        <CVSection size="medium" title="Software Engineering">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a pellentesque risus. Mauris quis turpis arcu. Proin
          orci mi, varius a nibh vitae, vestibulum maximus mi. Aliquam erat volutpat. Fusce consectetur volutpat leo, ac
          convallis lorem. Fusce id malesuada lorem,
        </CVSection>
        <CVSection size="medium" title="Infrastructure and Networking">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a pellentesque risus. Mauris quis turpis arcu. Proin
          orci mi, varius a nibh vitae, vestibulum maximus mi. Aliquam erat volutpat. Fusce consectetur volutpat leo, ac
          convallis lorem. Fusce id malesuada lorem,
        </CVSection>
      </CVItem>
    </CVItem>
    <CVItem icon="history" icon_colour="navy" title="Work History">
      <CVSection size="large" title="Overview">
        <CVTimeline />
      </CVSection>
      <CVSection size="large" title="Details">
        <CVHistoryItem :expanded="true" end="Dec 2024" icon="igs.png" start="Nov 2022" title="Head of Integration, IGS Ltd">
          <CVText>
            Having selected and trained my replacement team manager, she took on the role of Head of Software. I took the
            opportunity to focus on the technical aspects of how IGS products fit in to the wider customer environment.
            Specifically how the product interoperates with the remainder of our customers business and their factory. The key
            was to understand the customer perspective allowing them to use our product to solve their business problems
            without exposing (or burdening them with) our internal business logic. The technical solutions is a combination of
            working with well established factory management software, exposing a well designed set of software APIs and
            clearly defining the hardware touchpoints.
          </CVText>
          <CVText>
            Whilst initially this was a theoretical exercise, once I had established a framework, I created a prototype
            co-ordinator to prove the designed process and touch points. I was able to use this prototype to validate
            assumptions with clients and ultimately to present requirements to our customer's technology partners when
            designing the full factory. I was also able to learn BPMN which was both exciting and a really useful communication
            tool.
          </CVText>
          <CVText>
            Latterly this role was focused on partner and supplier selection and management, balanced with building internal
            relationships to keep hardware and software in line with each other and the overall product vision.
          </CVText>
        </CVHistoryItem>
        <CVHistoryItem :expanded="true" end="Nov 2022" icon="igs.png" start="Oct 2019" title="Head of Software, IGS Ltd">
          <CVText>
            After having built the core of the team, I was asked to take on the team management role. Alongside a few of the
            Northface Ventures team who had also come on board this was a great opportunity to build a culture of success,
            excitement and commitment with them.
          </CVText>
          <CVText>
            My role expanded to include the development of process and unity in the team. I was still responsible for
            recruitment and for the business aspects of running the department, but now also the line management of the
            individuals; our working agreements and practices; the quality and productivity of our output. Despite the
            lockdowns of 2020-2022 we grew the team from 12 to over 40 and produced software that was fit for purpose and
            running all of the companies experimental products.
          </CVText>
          <CVText>
            The lockdowns however were hard. We were still early in the development of our cultural norms - I don't think we
            had established enough trust in the brand new team to be able to become suddenly a remote team (not sure we ever
            did). We certainly had not developed the relationships across the other department that we needed to seamlessly
            flow software, hardware and data in to a single slick product. During this period it took all my strength of
            character to keep the team together and deliver solutions; and a lot of patience as we had to rework those
            solutions regularly.
          </CVText>
          <CVText>
            As we came out of the other end though we had weathered the storm as a business. Once the crew got back in to the
            office and there were more face to face interactions the cohesion strengthened and I was able to devolve greater
            rseponsibility and autonomy in to the team.
          </CVText>
        </CVHistoryItem>
        <CVHistoryItem
          :expanded="true"
          end="Oct 2019"
          icon="igs.png"
          start="Jul 2019"
          title="Software Team Architect, IGS Ltd"
        >
          <CVText>
            Intelligent Growth Solutions are a start up at the cutting edge of Vertical Farming technology; automating many of
            the processes; using low voltage systems to make them more energy efficient; ensuring only the most beneficial
            light frequencies are used by the LEDs.
          </CVText>
          <CVText>
            My role was to build a software team and culture ready to take on complex requirements. The Farm Management
            Software must manage all aspects of scheduling, coordination and planning to control multiple independent recipes
            running in the same machine to different timelines.
          </CVText>
          <CVText>
            During this period we were still very much in startup mode (I was employee number 11). To that end whilst my focus
            was on designing and recruiting a software team, I also had to create the recruiting and remuneration policies for
            the whole company. In designing the software team I worked with the still forming executive team, the board of
            investors and the founders; contributing to the business plan, creating departmental budgets and goals, and working
            out the headcount and structure of the organisation. I aided the Product Management team in understanding what the
            real product would be, setting some boundaries early on and helping define product requirements in both hardware
            and software.
          </CVText>
        </CVHistoryItem>
        <CVHistoryItem end="Jul 2019" icon="sensyne.png" start="Jul 2018" title="Head of Software Engineering, Sensyne Health">
          <CVText>
            Sensyne Health is a health tech business that provides Digital health apps to the NHS in support of specific
            clinical conditions. Whilst helping individuals get better health care, we are ethically sourcing data across a
            patient population which we then analyse to improve patient population care and support new drug discovery in the
            pharmaceutical industry.
          </CVText>
          <CVText>
            My role as Head of Software Engineering is to manage a team of 20+ engineers, testers, DevOps engineers and product
            owners in delivery of the digital health applications. As well as owning the architecture and development process,
            I code solutions and am heavily involved in the tooling, integration and deployment mechanisms for the team. I also
            work with my data engineering and systems medicine peers to ensure a smooth flow of data and requirements
            throughout the business model.
          </CVText>
        </CVHistoryItem>
        <CVHistoryItem end="Mar 2018" icon="tr.png" start="Oct 2017" title="Chief Instructor, Team Rubicon UK">
          <CVText>
            Team Rubicon UK sends people to disaster zones shortly after the event in order to help people survive and
            re-establish normal routines. In the aftermath of Hurricanes Irma and Maria, Team Rubicon UK sent over 100
            volunteers to the caribbean islands to help. My role was to plan and conduct both pre and post deployment training
            packages to ensure volunteers were fully prepared. I was also responsible for updating and delivering an induction
            training package to the 100s of new volunteers that joined after these disasters.
          </CVText>
        </CVHistoryItem>
        <CVHistoryItem end="Jul 2018" icon="nfv.png" start="Sep 2016" title="Agile Coach/Engineer, Northface Ventures">
          <CVText>
            The Northface Ventures team were part of the crew who built and sold Workplace Systems after a three year journey
            of transformation from stale software house to vibrant product-driven company. Now Northface share what we learned.
          </CVText>
          <CVText
            >My role was the engine room consultant. Working with engineering departments to build high performing teams
            delivering excellent product that satisfies market requirement. I assessed the engineering departments that I
            worked with to determine where to invest effort for improvement and where to cut out wasteful practice. I delivered
            coaching for engineers and engineering managers on agile concepts and implementation methodologies including Scrum
            and Kanban. Helping to implement modern engineering practices streamlining end to end delivery and foster a
            corporate culture of working together to deliver product.
          </CVText>
        </CVHistoryItem>
        <CVHistoryItem
          end="Aug 2016"
          icon="workplace.png"
          start="Apr 2014"
          title="Prod Development Manager, Workplace Systems"
        >
          <CVText>
            I led a team of 30+ software and QA engineers to deliver the flagship enterprise level application from Workplace
            Systems. This role coincided with a period of rapid growth after having repositioned ourselves in the market.
            Having started to implement Scrum in my previous role in the company, this role required that we scale that scrum
            effort, ultimately creating 5 scrum teams. Further, with a focus on quality, I also implemented a Scrumban team
            solely focused on customer tickets and performance. I also built on the kernel of a DevOps team to integrate
            infrastructure and engineering much more closely and adding more and more automation into build and deployment.
            Architecturally we moved the product to PHP5.6 (no easy feat) backed with a MySql move from 5.0 to 5.6. This
            allowed the scrum teams to set higher standards for code review and accelerated the refactor programme.
          </CVText>
          <CVText>
            During this time I also worked with wider business to help the professional services department to convert to using
            agile project management. I also spent 2 months in Sydney working with our Australian office, primarily to
            integrate an engineering team based there in to our global team, but also working with business management, sales
            and services teams to foster our core culture and embrace Agile thinking. In the later months of this role, as the
            company was being sold to a US firm, I spent several weeks in the US sharing best practice and standards from the
            UK engineering team with a larger US team - ensuring common procedures and methodologies and helping them develop
            their nascent adoption of Scrum.
          </CVText>
        </CVHistoryItem>
        <CVHistoryItem
          end="Apr 2014"
          icon="workplace.png"
          start="Mar 2013"
          title="Software Delivery Manager, Workplace Systems"
        >
          <CVText>
            I was the scrummaster for 2 scrum teams while we worked out how to do scrum. Due to a change of senior management,
            this was a time of turnaround and transformation at Workplace Systems; we moved from being a services company with
            a software offering to being product led. With that high level of change across all business functions, talent
            management was of the first importance - keeping the talent we had and attracting fresh thinkers. In addition to
            delivering user stories and being the sole deployment engineer, I set up a recruitment programme and trained new
            managers to share the load. I also started converting the deployment process from a largely manual process to a
            scripted process that ultimately went on to be a Jenkins job - this was the start of DevOps in the company. As a
            software delivery manager, my main focus for the product was to get us in to a position to upgrade to PHP5.3
            (that's not a typo) and to bring an experimental zend based mobile offering to fruition.
          </CVText>
          <CVText>
            The change of senior management was far from seamless, in fact all the C-Grades were let go in a single hit. Whilst
            the board chair stepped into the position of CEO, we were with out a CTO for 3 months. Being the senior tech
            leader, it fell to me to work with the new CEO to reassure our client base and our own employees; keeping the ship
            moving. I assisted with the appointment of our new CTO and helped with his initial integration with the team and
            business.
          </CVText>
        </CVHistoryItem>
        <CVHistoryItem end="Mar 2013" icon="workplace.png" start="Sep 2011" title="PHP Software Engineer, Workplace Systems">
          <CVText>
            As a PHP engineer my role was to enhance and maintain a procedural code base with a mix of PHP4 and PHP5 standards
            and over 500k lines in over 100k files. In addition to squashing bugs and delivering features, I spent a lot of
            time refactoring code to simplify it and make it ready for further refactor to OO at a later date. I also started
            to gather knowledge of our deployment processes from several remote workers (including in Australia) and
            consolidating our version control and ticketing systems.
          </CVText>
        </CVHistoryItem>
        <CVHistoryItem end="Oct 2011" icon="tv.png" start="Mar 2008" title="Assistant Producer/Location Mgr, Film and TV">
          <CVText>
            I worked mostly in documentary making and comedy shows. The short contract nature of the work, meant building teams
            very quickly to be able to deliver high quality from day 1. I worked for many production companies including Tiger
            Aspect and TwoFour. These roles were a great shake out after the military and allowed me to see the world from many
            different perspectives.
          </CVText>
        </CVHistoryItem>
        <CVHistoryItem end="Sep 2011" icon="php.png" start="Mar 2008" title="Self Employed Web Developer">
          <CVText>
            Taking small contracts between working in the TV industry I built simple browser apps from scratch and
            enhanced/fixed complex and well established brand websites. This included work for Oxford Outcomes on academically
            rigorous survey applications and website work for smartlogic.com, shirtworks.co.uk and anchorvans.co.uk.
          </CVText>
        </CVHistoryItem>
        <CVHistoryItem end="Mar 2008" icon="army.png" start="Aug 1998" title="British Army Officer">
          <CVText>
            Royal Signals Officers are the army's technical leaders, both commanding highly capable technical soldiers and
            shaping technology policy and procurement. Throughout my career as a Royal Signals Officer I completed duties in
            both sides of the role.
          </CVText>
          <CVText>
            In command, I presided over units of upto 200 soldiers providing telephony and office services in the field and in
            barracks. I was a recruit training instructor for technical apprentices. I was deployed to various location
            worldwide including an exchange to the New Zealand Army.
          </CVText>
          <CVText>
            In a technical capacity I procure urgently needed operational equipment for troops in Bosnia, Kosovo, Iraq and
            Afghanistan. I managed a global reachback communications network connecting UK military HQs with governmental
            command and other NATO allies. I was appointed as the Army's competent authority on Electronic Warfare, supervising
            all Army projects, research and development and supporting our industry partners.
          </CVText>
        </CVHistoryItem>
      </CVSection>
    </CVItem>
    <CVItem icon="school" icon_colour="slategray" title="Education">
      <CVSection>
        <CVHistoryItem end="Jul 1999" icon="rmas.webp" start="Aug 1998" title="Royal Military Academy Sandhurst">
          <CVQualification aside_title="Trained In" outcome_title="Qualification">
            <template #outcome> Commissioned in to Royal Corps of Signals</template>
            <template #aside> Leadership, Communication Skills, Military Analysis (History), Soldiering</template>
          </CVQualification>
        </CVHistoryItem>
        <CVHistoryItem
          end="Jul 1998"
          icon="warwick.png"
          start="Sep 1995"
          title="University of Warwick, Dept of Computer Science"
        >
          <CVQualification aside_title="Clubs and Societies" outcome_title="Qualification">
            <template #outcome>2:2 Bachelor of Science with Honours, Computer Science</template>
            <template #aside>Warwick Aikido Club, DCS technical group, SU Stage crew</template>
          </CVQualification>
        </CVHistoryItem>
        <CVHistoryItem end="Jul 1995" icon="dyrms.png" start="Sep 1988" title="Duke of York's Royal Military School">
          <CVQualification aside_title="Appointments" outcome_title="Qualifications">
            <template #outcome>
              4 A-Levels: Maths(B), Chemistry(B), Physics(B), Biology(D), 1 AS-Level: General Studies(D), 11 GCSEs (including
              English and Maths)
            </template>
            <template #aside>Head Boy (Boy RSM), School Prefect and Head of House</template>
          </CVQualification>
        </CVHistoryItem>
      </CVSection>
    </CVItem>
    <CVItem icon="volunteer_activism" icon_colour="maroon" title="Volunteering">
      <CVSection>
        <CVHistoryItem end="Present" icon="react-logo.png" start="Apr 2020" title="REACT Disaster Response">
          <CVText>
            REACT started as an operation of Team Rubicon UK in response to the COVID-19 pandemic. It has since become is own
            organisation focusing on domestic and international response, but also delving in to international development in
            the areas of preparedness and water safety.
          </CVText>
          <CVText>
            During the pandemic I was responsible for establishing and managing the National Volunteer Coordination Centre on
            behalf of the Department for Culture Media and Sport. We kept a register of all significant volunteer organisations
            and materiel donations and ensured that they were directed to the Local Council Disaster Manager in most need. I also
            supervised the response teams that were running the UK's temporary mortuary system and the admin teams setting up
            the back offices for the Nightingale Hospitals.
          </CVText>
          <CVText>
            After the initial response was over I took part in 3 COVID-19 surge testing operations. Delivering door to door PCR
            testing kits in vulnerable neighbourhoods in Birmingham, High Wycombe and Solihull.
          </CVText>
        </CVHistoryItem>
        <CVHistoryItem end="Jun 2020" icon="tr.png" start="Apr 2014" title="Team Rubicon UK">
          <CVText>
            Team Rubicon UK was an international diaster response organisation that united the skills and experiences of
            military veterans with first responders to deploy emergency response teams in the UK and around the world. As a
            volunteer responder I was able to bring my full range of skills and experience to help people in the aftermath of a
            disaster.
          </CVText>
          <CVText>
            I deployed to the Philippines in response to a minor earthquake and rebuilt school and medical facilities serving
            the poorest communities in Cebu City. I ran the UK based HQ supervising response operations in: the British Virgin
            Islands, Barbados and Turks and Caicos after Hurricanes Irma and Maria; and Sri Lanka after Cyclone Mora.
          </CVText>
          <CVText> Team Rubicon UK was a franchise of Team Rubicon USA, that franchise ended in June 2020. </CVText>
        </CVHistoryItem>
      </CVSection>
    </CVItem>
    <CVItem icon="stadia_controller" icon_colour="mediumseagreen" title="Hobbies and Interests"></CVItem>
    <CVItem icon="sports" icon_colour="peru" title="Referees">
      <CVReferee name="David Farquhar FRGS" picture="david.jpeg">
        <template #context>
          Friend and CEO at Intelligent Growth Solutions, Northface Ventures and Workplace Systems
        </template>
        <template #description>
          David has been a serial entrepreneur for over 3 decades, focused on delivering shareholder value, most recently
          through driving the rapid growth of vertical farm manufacturer Intelligent Growth Solutions, from R&D start-up to
          global leader.
        </template>
      </CVReferee>
      <CVReferee name="Dr Vinca Russell" picture="vinca.jpeg">
        <template #context> Product Manager and peer at Intelligent Growth Solutions</template>
        <template #description>
          Vinca is an innovative and highly competent product manager with a background in science, mathematical modelling, and
          the maritime industry. Happiest when challenged by work, she loves to find out what makes people tick to get the most
          out of diverse multi-disciplinary teams.
        </template>
      </CVReferee>
      <CVReferee name="Greg Stevens" picture="greg.jpeg">
        <template #context> Architect and peer at Intelligent Growth Solutions</template>
        <template #description>
          Greg has been a software engineer for 14 years, creating solutions in medtech and agritech. He is passionate about
          leading teams that deliver systems that work even when other things are failing.
        </template>
      </CVReferee>
    </CVItem>
    <CVItem :no_print="true" icon="link" icon_colour="darkslategray" title="Links">
      <CVSection title="Repos">
        <CVLink icon="gh.svg" link="https://github.com/izanbard/" title="GitHub">
          My GitHub Profile - note most of my repos are private.
        </CVLink>
        <CVLink icon="bb.webp" link="https://bitbucket.org/gordywills/" title="Bitbucket">
          My Bitbucket Profile - note most of my repos are private.
        </CVLink>
      </CVSection>
      <CVSection title="Podcasts">
        <CVLink
          icon="spotify.png"
          link="https://open.spotify.com/episode/0USJGs46wBwuGN9O4XOCZa?si=4TAOJXdiSn6VKBEzvd4krg"
          title="How Aye Built This"
        >
          Liam Wilson and I talk all things vertical farming, software engineering, data science an loads more. How Aye Built
          This is about people in the Scottish technology sector and what they are building.
        </CVLink>
        <CVLink icon="vimeo.png" link="https://vimeo.com/572166371#t=22m18s" title="Edinburgh Science Festival">
          In 2021 the festival was online only, this webinar sees Dr Hannah Rudman, Dominic Gammon and me getting together to
          talk aquaponics and hydroponics and investigating when a farm is not a farm.
        </CVLink>
      </CVSection>
      <CVSection title="Credits">
        <CVLink icon="imdb.webp" link="https://www.imdb.com/name/nm3047429" title="IMDB">
          My IMDB page from those productions that added credits.
        </CVLink>
      </CVSection>
    </CVItem>
    <CVItem :no_print="true" icon="file_save" icon_colour="crimson" title="Download">
      <Suspense>
        <CVDownload display-name="One Page CV" file-name="gordon-peter-wills_cv-resume_one-page.pdf" />
      </Suspense>
      <Suspense>
        <CVDownload display-name="Full CV" file-name="gordon-peter-wills_cv-resume.pdf" />
      </Suspense>
    </CVItem>
  </main>
</template>

<style scoped>
main {
  border-left: var(--color-border) solid 1px;
  border-right: var(--color-border) solid 1px;
  border-bottom: var(--color-border) solid 1px;
  background-color: var(--color-background);
  @media print {
    border: 0;
  }
  position: relative;
}
</style>
