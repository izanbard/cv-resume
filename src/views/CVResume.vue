<script lang="ts" setup>
import CVContacts from '@/components/CVContacts.vue'
import CVDownload from '@/components/CVDownload.vue'
import CVHistoryItem from '@/components/CVHistoryItem.vue'
import CVItem from '@/components/CVItem.vue'
import CVListItem from '@/components/CVListItem.vue'
import CVSection from '@/components/CVSection.vue'
import CVText from '@/components/CVText.vue'
import CVTimeline from '@/components/CVTimeline.vue'
</script>

<template>
  <main>
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
        <CVSection title="Leadership" size="medium">
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
        </CvSection>
        <CVSection title="Partnership and Relationship Building" size="medium">
          <CVText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a pellentesque risus. Mauris quis turpis arcu. Proin
            orci mi, varius a nibh vitae, vestibulum maximus mi. Aliquam erat volutpat. Fusce consectetur volutpat leo, ac
            convallis lorem. Fusce id malesuada lorem,
          </CVText>
        </CvSection>
        <CVSection title="Business Planning and Budgeting" size="medium">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a pellentesque risus. Mauris quis turpis arcu. Proin
          orci mi, varius a nibh vitae, vestibulum maximus mi. Aliquam erat volutpat. Fusce consectetur volutpat leo, ac
          convallis lorem. Fusce id malesuada lorem,
        </CvSection>
        <CVSection title="Strategic and Operational Goal setting" size="medium">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a pellentesque risus. Mauris quis turpis arcu. Proin
          orci mi, varius a nibh vitae, vestibulum maximus mi. Aliquam erat volutpat. Fusce consectetur volutpat leo, ac
          convallis lorem. Fusce id malesuada lorem,
        </CvSection>
        <CVSection title="Recruitment" size="medium">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a pellentesque risus. Mauris quis turpis arcu. Proin
          orci mi, varius a nibh vitae, vestibulum maximus mi. Aliquam erat volutpat. Fusce consectetur volutpat leo, ac
          convallis lorem. Fusce id malesuada lorem,
        </CvSection>
        <CVSection title="Culture Creation" size="medium">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a pellentesque risus. Mauris quis turpis arcu. Proin
          orci mi, varius a nibh vitae, vestibulum maximus mi. Aliquam erat volutpat. Fusce consectetur volutpat leo, ac
          convallis lorem. Fusce id malesuada lorem,
        </CvSection>
        <CVSection title="Agile Thinking, Behaviour and Coaching" size="medium">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a pellentesque risus. Mauris quis turpis arcu. Proin
          orci mi, varius a nibh vitae, vestibulum maximus mi. Aliquam erat volutpat. Fusce consectetur volutpat leo, ac
          convallis lorem. Fusce id malesuada lorem,
        </CvSection>
      </CVItem>
      <CVItem icon="data_object" icon_colour="saddlebrown" level="two" title="Technical Skills">
        <CVSection title="System Architecture" size="medium">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a pellentesque risus. Mauris quis turpis arcu. Proin
          orci mi, varius a nibh vitae, vestibulum maximus mi. Aliquam erat volutpat. Fusce consectetur volutpat leo, ac
          convallis lorem. Fusce id malesuada lorem,
        </CVSection>
        <CVSection title="Systems Integaration" size="medium">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a pellentesque risus. Mauris quis turpis arcu. Proin
          orci mi, varius a nibh vitae, vestibulum maximus mi. Aliquam erat volutpat. Fusce consectetur volutpat leo, ac
          convallis lorem. Fusce id malesuada lorem,
        </CvSection>
        <CVSection title="DevOps Patterns" size="medium">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a pellentesque risus. Mauris quis turpis arcu. Proin
          orci mi, varius a nibh vitae, vestibulum maximus mi. Aliquam erat volutpat. Fusce consectetur volutpat leo, ac
          convallis lorem. Fusce id malesuada lorem,
        </CvSection>
        <CVSection title="Site Reliability Engineering" size="medium">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a pellentesque risus. Mauris quis turpis arcu. Proin
          orci mi, varius a nibh vitae, vestibulum maximus mi. Aliquam erat volutpat. Fusce consectetur volutpat leo, ac
          convallis lorem. Fusce id malesuada lorem,
        </CvSection>
        <CVSection title="Software Engineering" size="medium">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a pellentesque risus. Mauris quis turpis arcu. Proin
          orci mi, varius a nibh vitae, vestibulum maximus mi. Aliquam erat volutpat. Fusce consectetur volutpat leo, ac
          convallis lorem. Fusce id malesuada lorem,
        </CvSection>
        <CVSection title="Infrastructure and Networking" size="medium">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a pellentesque risus. Mauris quis turpis arcu. Proin
          orci mi, varius a nibh vitae, vestibulum maximus mi. Aliquam erat volutpat. Fusce consectetur volutpat leo, ac
          convallis lorem. Fusce id malesuada lorem,
        </CvSection>
      </CVItem>
    </CVItem>
    <CVItem icon="history" icon_colour="midnightblue" title="Work History">
      <CVSection title="Overview" size="large">
        <CVTimeline/>
      </CVSection>
      <CVSection title="Details" size="large">
        <CVHistoryItem title="Hd of Integration, IGS Ltd" end="Dec 2024" icon="igs.png" start="Nov 2022"> </CVHistoryItem>
        <CVHistoryItem title="Hd of Software, IGS Ltd" end="Nov 2022" icon="igs.png" start="Oct 2019"> </CVHistoryItem>

        <CVHistoryItem title="Software Team Architect, IGS Ltd" end="Oct 2019" icon="igs.png" start="Jul 2019">
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
        <CVHistoryItem end="Aug 2016" icon="workplace.png" start="Apr 2014" title="Product Dev Mgr, Workplace Systems">
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
        <CVHistoryItem end="Apr 2014" icon="workplace.png" start="Mar 2013" title="Software Delivery Mgr, Workplace Systems">
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
        <CVHistoryItem end="Oct 2011" icon="tv.png" start="Mar 2008" title="Asst Producer/Location Mgr, Film and TV">
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
      <CVHistoryItem title="Royal Military Academy Sandhurst" end="Jul 1999" icon="rmas.webp" start="Aug 1998"></CVHistoryItem>
      <CVHistoryItem
        title="University of Warwick, Dept of Computer Science"
        end="Jul 1998"
        icon="warwick.png"
        start="Sep 1995"
      ></CVHistoryItem>
      <CVHistoryItem
        title="Duke of York's Royal Military School"
        end="Jul 1995"
        icon="dyrms.png"
        start="Sep 1988"
      ></CVHistoryItem>
    </CVItem>
    <CVItem icon="volunteer_activism" icon_colour="navy" title="Volunteering">
      <CVHistoryItem title="REACT Disaster Response" end="Present" icon="react.png" start="Jun 2020">
        <CVText>
          Team Rubicon unites the skills and experiences of military veterans with first responders to rapidly deploy emergency
          response teams in the UK and around the world. As a greyshirt member of the team I am a volunteer responder able to
          bring my full range of skills and experience to help people in the aftermath of a disaster.
        </CVText>
      </CVHistoryItem>
      <CVHistoryItem title="Team Rubicon UK" end="Jun 2020" icon="tr.png" start="Apr 2014">
        <CVText>
          Team Rubicon unites the skills and experiences of military veterans with first responders to rapidly deploy emergency
          response teams in the UK and around the world. As a greyshirt member of the team I am a volunteer responder able to
          bring my full range of skills and experience to help people in the aftermath of a disaster.
        </CVText>
      </CVHistoryItem>
    </CVItem>
    <CVItem icon="stadia_controller" icon_colour="mediumseagreen" title="Hobbies and Interests"></CVItem>
    <CVItem icon="sports" icon_colour="peru" title="Referees"></CVItem>
    <CVItem icon="link" icon_colour="darkslategray" title="Links"></CVItem>
    <CVItem :no_print="true" icon="file_save" icon_colour="crimson" title="Download">
      <Suspense>
        <CVDownload file-name="gordon-peter-wills_cv-resume_one-page.pdf" display-name="One Page CV" />
      </Suspense>
      <Suspense>
        <CVDownload file-name="gordon-peter-wills_cv-resume.pdf" display-name="Full CV" />
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
}
</style>
