<script lang="ts" setup>
import CVContacts from '@/components/CVContacts.vue'
import CVDownload from '@/components/CVDownload.vue'
import CVExpandAll from '@/components/CVExpandAll.vue'
import CVGridWrapper from '@/components/CVGridWrapper.vue'
import CVHistoryItem from '@/components/CVHistoryItem.vue'
import CVHobby from '@/components/CVHobby.vue'
import CVItem from '@/components/CVItem.vue'
import CVLink from '@/components/CVLink.vue'
import CVListItem from '@/components/CVListItem.vue'
import CVQualification from '@/components/CVQualification.vue'
import CVReferee from '@/components/CVReferee.vue'
import CVSection from '@/components/CVSection.vue'
import CVText from '@/components/CVText.vue'
import CVTimeline from '@/components/CVTimeline.vue'
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
        city="Bicester, UK"
      />
    </CVItem>
    <CVItem icon="article" icon_colour="darkolivegreen" title="Introduction">
      <CVText>I lead teams that get hard things done.</CVText>
      <CVText>
        Technology has always been central to my career, from my time as an officer in the Royal Signals to my roles as a
        software engineer and engineering leader. I am a hands on architect and solution designer guiding teams of humans to
        accomplish challenging feats that no individual thought they could do. I have led teams of 5 and grown teams to over
        200; I have delivered complex software solutions in Workforce Management, Healthtech, Agritech and defence,
        contributing significant operational improvements and customer satisfaction.
      </CVText>
      <CVText>
        My foundational experience in the Army instilled in me a deep appreciation for commitment, loyalty, integrity, and
        professionalism - values I actively seek in others. For over 25 years, I've focused on cultivating cultures where
        people feel a sense of safety and belonging. This involves building a platform of trust, fostering individual growth in
        skills and confidence, and creating cohesive teams that enjoy working and playing together.
      </CVText>
      <CVText>
        As a lifelong learner, or perhaps "nerd adjacent", I love new things. I'm passionate about exploring new ideas across
        all fields, though primarily technology. We learn more things pushing boundaries than staying safely inside them. A key
        goal of mine, in any organisation, is to foster a learning-oriented mindset across all business functions. Using an
        experimental approach, in technology and leadership, has led me to insights about myself and how to lead technology
        businesses effectively.
      </CVText>
    </CVItem>
    <CVItem icon="person_celebrate" icon_colour="darkgoldenrod" title="Skills">
      <CVItem icon="mindfulness" icon_colour="cornflowerblue" level="two" title="Business Skills">
        <CVSection size="medium" title="Leadership and Agile Management">
          <CVText>
            Guided engineering departments of up to 200+ people, from single Scrum teams to multiple teams. Championed Agile
            methodologies (Scrum, Kanban) to optimize delivery and empower frontline decision-makers. Experienced in formal
            project management frameworks, including PRINCE2, ITIL, and Critical Path, applied across defense, documentary
            film, and software contexts.
          </CVText>
        </CVSection>
        <CVSection size="medium" title="Culture Creation and Engagement">
          <CVText>
            Expert in developing high-performance cultures built on shared values and a compelling business mission. Led the
            establishment of vision statements and team values to foster unity, psychological safety, and meaningful
            interpersonal engagement.
          </CVText>
        </CVSection>
        <CVSection size="medium" title="Coaching and Mentorship">
          <CVText>
            Cultivate a culture of autonomy, mastery, and purpose through active coaching and servant leadership. Focus on
            empowering individuals, fostering engagement, and driving both personal and team productivity.
          </CVText>
        </CVSection>
        <CVSection size="medium" title="Leading by Example">
          <CVText>
            Actively live and model core values to normalize openness and vulnerability, cultivating a sustainable, productive,
            and fun environment.
          </CVText>
        </CVSection>
        <CVSection size="medium" title="Strategic and Operational Goal setting">
          <CVText>
            Drive team purpose and alignment by defining clear strategic and operational goals. Empower low-level
            decision-makers with the information they need to act with autonomy, ensuring efficiency and innovation while
            staying aligned with the business mission.
          </CVText>
        </CVSection>
        <CVSection size="medium" title="Product Engineering">
          <CVText>
            Championed a product-focused business approach to improve technical performance and drive significant business
            advantages. Aligned cross-functional departments (sales, marketing, engineering) around product definitions to
            reduce sales cycles, focus activities, and manage customer expectations.
          </CVText>
        </CVSection>
        <CVSection size="medium" title="Business Planning and Budgeting">
          <CVText>
            Assimilate conflicting opinions from stakeholders (sales, finance, engineering) to create pragmatic business plans
            aligned with strategic goals. Regularly managed departmental budgets with SALEX in excess of £10M, CAPEX of £2M,
            and OPEX of £5M.
          </CVText>
        </CVSection>
        <CVSection size="medium" title="Financial Diligence">
          <CVText>
            Ensure fiscal responsibility by meeting budgets and maximizing value for money while making evidence-based spending
            decisions.
          </CVText>
        </CVSection>
        <CVSection size="medium" title="Recruitment">
          <CVText>
            Established and managed robust, inclusive recruitment procedures focused on seeking diversity of thought. Empowered
            teams to interview and select their own colleagues, ensuring a positive applicant experience and reinforcing our
            culture.
          </CVText>
        </CVSection>
        <CVSection size="medium" title="Partnership and Relationship Building">
          <CVText>
            Skilled in assessing supplier capability and technical fit to establish key partnerships and create partner
            ecosystems. Cultivate robust, long-term relationships built on trust, clear communication, and the ability to
            navigate critical conversations with pragmatism.
          </CVText>
        </CVSection>
      </CVItem>
      <CVItem icon="data_object" icon_colour="saddlebrown" level="two" title="Technical Skills">
        <CVSection size="medium" title="Product Engineering & Strategy">
          <CVText>
            Champion a product-focused approach that simplifies sales and marketing cycles and reduces maintenance costs.
          </CVText>
        </CVSection>
        <CVSection size="medium" title="Data-Driven Decisions">
          <CVText>
            Make product decisions based on empirical data from experimentation, feedback, and analysis.
          </CVText>
        </CVSection>
        <CVSection size="medium" title="Collaboration">
          <CVText>
            Align product owners, UX, and software engineers with business goals to define product roadmaps and priorities.
          </CVText>
        </CVSection>
        <CVSection size="medium" title="User-Centric Outcomes">
          <CVText>
            Drive development focused on key user outcomes: <strong>Reliability, Usability, Maintainability, Extensibility,</strong> and <strong>Predictability</strong>.
          </CVText>
        </CVSection>
        <CVSection size="medium" title="System Architecture">
          <CVText>
            Design simple, resilient, and extensible systems using a layered approach from code selection to macro-level
            application integration.
          </CVText>
        </CVSection>
        <CVSection size="medium" title="Core Technologies">
          <CVText>
            Specialize in designing cloud-based, multi-tenant SaaS applications, with hands-on experience in
            <strong>microservices, REST, MQTT, Kubernetes,</strong> and <strong>Graph DB</strong>.
          </CVText>
        </CVSection>
        <CVSection size="medium" title="Efficiency">
          <CVText>
            Emphasize separation of concerns and library extraction to create streamlined, maintainable services and accelerate
            development.
          </CVText>
        </CVSection>
        <CVSection size="medium" title="Automation">
          <CVText>
            Focus on designing high levels of automation and robust communication pathways to build trusted, timely platforms.
          </CVText>
        </CVSection>
        <CVSection size="medium" title="Systems Integration">
          <CVText>
            Architect and implement systems that share data and telemetry, and expose simple, effective command interfaces.
          </CVText>
        </CVSection>
        <CVSection size="medium" title="Cross-Industry Experience">
          <CVText>
            Expertise in industrial automation (from ERP to PLC), as well as consuming medical sensor data for treatment
            decision engines.
          </CVText>
        </CVSection>
        <CVSection size="medium" title="Standards">
          <CVText>
            Leverage modern protocols and standards like <strong>REST, MQTT, OAS,</strong> and <strong>AsyncAPI</strong> to
            ensure interoperability and maintainability.
          </CVText>
        </CVSection>
        <CVSection size="medium" title="DevOps & CI/CD">
          <CVText>
            Design and implement DevOps practices that increase software quality, reliability, and engineering velocity.
          </CVText>
        </CVSection>
        <CVSection size="medium" title="Automation Focus">
          <CVText>
            Advocate for and implement automated build, test, and deployment pipelines based on repository branching rules.
          </CVText>
        </CVSection>
        <CVSection size="medium" title="Advanced Practices">
          <CVText>
            Champion <strong>Infrastructure as Code (IaC)</strong>, static code analysis, feature flags, and the creation of
            platform teams to support development.
          </CVText>
        </CVSection>
        <CVSection size="medium" title="Site Reliability Engineering (SRE)">
          <CVText> Apply SRE principles to ensure system reliability and minimize downtime. </CVText>
        </CVSection>
        <CVSection size="medium" title="Observability & Monitoring">
          <CVText>
            Expert in implementing observability stacks (<strong>New Relic, Grafana</strong>) to proactively identify issues
            and trace events across service boundaries.
          </CVText>
        </CVSection>
        <CVSection size="medium" title="Incident Response">
          <CVText>
            Establish recovery and restoration procedures using <strong>IaC, Kubernetes,</strong> and
            <strong>Terraform</strong>, ensuring data integrity and rapid service restoration.
          </CVText>
        </CVSection>
        <CVSection size="medium" title="Team Ownership">
          <CVText>
            Instill a culture where all software engineers understand and take ownership of their code's reliability and
            support.
          </CVText>
        </CVSection>
        <CVSection size="medium" title="Software Engineering">
          <CVText>
            Experienced back-end software engineer with a strong understanding of context-free languages and object-oriented
            design.
          </CVText>
        </CVSection>
        <CVSection size="medium" title="Languages & Databases">
          <CVText>
            Proficient in <strong>Python</strong> and <strong>JavaScript/TypeScript</strong>, with hands-on experience with
            <strong>Graph, KV, document,</strong> and <strong>relational databases</strong>.
          </CVText>
        </CVSection>
        <CVSection size="medium" title="Infrastructure & Networking">
          <CVText>
            Proficient in basic networking principles including <strong>DNS, DHCP,</strong> and
            <strong>multi-site VPNs</strong>.
          </CVText>
        </CVSection>
        <CVSection size="medium" title="Systems Administration">
          <CVText>
            Skilled in Linux server administration and software deployment via <strong>Docker Compose/Swarm</strong>.
          </CVText>
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
            Intelligent Growth Solutions are a start up at the cutting edge of Vertical Farming technology; automating many of
            the processes; using low voltage systems to make them more energy efficient; ensuring only the most beneficial
            light frequencies are used by the LEDs.
          </CVText>
          <CVText>
            Having selected and trained my replacement team manager, I took the opportunity to focus on the technical aspects
            of how IGS products fit in to the wider customer environment. Specifically how the product interoperates with the
            remainder of our customers' business and their factory. The key was to understand the customer perspective allowing
            them to use our product to solve their business problems without exposing to (or burdening them with) our internal
            business logic. The technical solution is a combination of working with well established factory management
            software, exposing a well designed set of software APIs and clearly defining the hardware touchpoints.
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
            Northface Ventures team who had also come on board, this was a great opportunity to build a shared culture of
            success, excitement and commitment.
          </CVText>
          <CVText>
            My role expanded to include the development of process and unity in the team. I was still responsible for
            recruitment and for the business aspects of running the department, but now also the line management of the
            individuals; our working agreements and practices; the quality and productivity of our output. Despite the
            lockdowns of 2020-2022 we grew the team from 12 to over 40 and produced software that was fit for purpose and ran
            all of the companies experimental products.
          </CVText>
          <CVText>
            The lockdowns however were hard. We were still early in the development of our cultural norms - I don't think we
            had established enough trust in the brand new team to be able to suddenly become a remote team (not sure we ever
            did). We certainly had not developed the relationships across the other departments that we needed to seamlessly
            flow software, hardware and data in to a single slick product. During this period it took all my strength of
            character to keep the team together and deliver solutions; and a lot of patience as we had to rework those
            solutions regularly.
          </CVText>
          <CVText>
            However, we came out of the other end and weathered the storm as a business. Once the crew got back in to the
            office and there were more face to face interactions, the cohesion strengthened and I was able to devolve greater
            responsibility and autonomy in to the team.
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
            My role was to build a software team and culture ready to take on complex requirements. The farm management
            software must manage all aspects of scheduling, coordination and planning to control multiple independent recipes
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
            Sensyne Health is a health tech business that provides digital health apps to the NHS in support of specific
            clinical conditions. Whilst helping individuals get better healthcare, we were ethically sourcing data across a
            patient population which we then analysed to improve patient population care and support new drug discovery in the
            pharmaceutical industry.
          </CVText>
          <CVText>
            My role as Head of Software Engineering was to manage a team of 20+ engineers, testers, DevOps engineers and
            product owners in delivery of the digital health applications. As well as owning the architecture and development
            process, I coded solutions and was heavily involved in the tooling, integration and deployment mechanisms for the
            team. I also worked with my data engineering and systems medicine peers to ensure a smooth flow of data and
            requirements throughout the business model.
          </CVText>
        </CVHistoryItem>
        <CVHistoryItem end="Mar 2018" icon="tr.png" start="Oct 2017" title="Chief Instructor, Team Rubicon UK">
          <CVText>
            Team Rubicon UK sends people to disaster zones shortly after the event in order to help people survive and
            re-establish normal routines. In the aftermath of Hurricanes Irma and Maria, Team Rubicon UK sent over 100
            volunteers to the Caribbean islands to help. My role was to plan and conduct both pre and post deployment training
            packages to ensure volunteers were fully prepared. I was also responsible for updating and delivering an induction
            training package to the 100s of new volunteers that joined after these disasters.
          </CVText>
        </CVHistoryItem>
        <CVHistoryItem end="Jul 2018" icon="nfv.png" start="Sep 2016" title="Agile Coach/Engineer, Northface Ventures">
          <CVText>
            The Northface Ventures team were part of the crew who built and sold Workplace Systems after a three year journey
            of transformation from stale software house to vibrant product-driven company. After that success we decided to
            share what we had learned.
          </CVText>
          <CVText>
            My role was the engine room consultant. Working with engineering departments to build high performing teams
            delivering excellent product that satisfies market requirement. I assessed the engineering departments that I
            worked with to determine where to invest effort for improvement and where to cut out wasteful practice. I delivered
            coaching for engineers and engineering managers on agile concepts and implementation methodologies including Scrum
            and Kanban. Helping to implement modern engineering practices streamlining end-to-end delivery and foster a
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
            During this time I also worked with the wider business to help the professional services department to convert to
            using agile project management. I also spent 2 months in Sydney working with our Australian office, primarily to
            integrate an engineering team based there in to our global team, but also working with business management, sales
            and services teams to foster our core culture and embrace Agile thinking. In the later months of this role, as the
            company was being sold to a US firm, I spent several weeks in Detroit sharing best practice and standards from the
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
            I was the scrum master for 2 scrum teams while we worked out how to do scrum. Due to a change of senior management,
            this was a time of turnaround and transformation at Workplace Systems; we moved from being a services company with
            a software offering to being product led. With that high level of change across all business functions, talent
            management was of the first importance - keeping the talent we had and attracting fresh thinkers. In addition to
            delivering user stories and being the sole deployment engineer, I set up a recruitment programme and trained new
            managers to share the load. I also started converting the deployment process from a largely manual process to a
            scripted process that ultimately went on to be a Jenkins job - this was the start of DevOps in the company. As a
            software delivery manager, my main focus for the product was to get us in to a position to upgrade to PHP5.3
            (that's not a typo) and to bring an experimental Zend-based mobile offering to fruition.
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
            In command, I presided over units of up to 200 soldiers providing telephony and office services in the field and in
            barracks. I was a recruit training instructor for technical apprentices. I was deployed to various locations
            worldwide including an exchange to the New Zealand Army.
          </CVText>
          <CVText>
            In a technical capacity I procured urgently needed operational equipment for troops in Bosnia, Kosovo, Iraq and
            Afghanistan. I managed a global reach-back communications network connecting UK military HQs with governmental
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
            and materiel donations and ensured that they were directed to the Local Council Disaster Manager in most need. I
            also supervised the response teams that were running the UK's temporary mortuary system and the admin teams setting
            up the back offices for the Nightingale Hospitals.
          </CVText>
          <CVText>
            After the initial response was over I took part in 3 COVID-19 surge testing operations. Delivering door to door PCR
            testing kits in vulnerable neighbourhoods in Birmingham, High Wycombe and Solihull.
          </CVText>
        </CVHistoryItem>
        <CVHistoryItem end="Jun 2020" icon="tr.png" start="Apr 2014" title="Team Rubicon UK">
          <CVText>
            Team Rubicon UK was an international disaster response organisation that united the skills and experiences of
            military veterans with first responders to deploy emergency response teams in the UK and around the world. As a
            volunteer responder I was able to bring my full range of skills and experience to help people in the aftermath of a
            disaster.
          </CVText>
          <CVText>
            I deployed to the Philippines in response to a minor earthquake and rebuilt school and medical facilities serving
            the poorest communities in Cebu City. I ran the UK based HQ supervising response operations in: the British Virgin
            Islands, Barbados and Turks and Caicos after Hurricanes Irma and Maria; and Sri Lanka after Cyclone Mora.
          </CVText>
          <CVText> Team Rubicon UK was a franchise of Team Rubicon USA, that franchise ended in June 2020.</CVText>
        </CVHistoryItem>
      </CVSection>
    </CVItem>
    <CVItem icon="stadia_controller" icon_colour="mediumseagreen" title="Hobbies and Interests">
      <CVGridWrapper :columns="4">
        <CVHobby picture_bottom="pct.png" picture_top="adventuring.jpg" title="Adventuring">
          <CVText>
            I love adventuring; and I love it when that adventure is outdoors and full of discovery and beauty.
          </CVText>
          <CVText>
            I have sought adventure in many forms, most recently in long distance hiking. In the summer of 2022, I completed
            ~1400 miles of the
            <a href="https://www.pcta.org/">Pacific Crest Trail</a>. Setting off from the Mexican border I hiked north through
            California and Oregon (skipping some bits that were on fire) and finished on the southern Washington State border.
            It was amazing and if you have a spare couple of hours, ask me about it.
          </CVText>
          <CVText>
            In winter of 2024 I covered ~600 miles of the <a href="https://www.teararoa.org.nz/">Te Araroa</a> trail in New
            Zealand. Starting in the middle of North Island heading south, crossing the Cook Strait and finishing near Nelson.
            This was a significantly different adventure, that included some canoeing and lots of hitch-hiking.
          </CVText>
        </CVHobby>
        <CVHobby picture_bottom="board.jpg" picture_top="computer.webp" title="Gaming">
          <CVText>
            Play is fundamental to how we learn and how we form meaningful relationships with people. It keeps my mind active
            and challenged; helping to be flexible to changing rule-sets and environments.
          </CVText>
          <CVText>
            My favourite style is cooperative gameplay, be that online or on a tabletop. I like to puzzle things out together,
            whether that is joining up to tackle the cryptic crossword or building new worlds together in factory simulators.
          </CVText>
          <CVText>
            A bit of healthy competition can also be good for the soul, and can help an established team to let off some steam
            and build those bragging rights rivalries. The shared experiences can build trust and camaraderie that can elevate
            colleagues to friends.
          </CVText>
        </CVHobby>
        <CVHobby picture_bottom="observatory.jpg" picture_top="astronomy.jpg" title="Astronomy">
          <CVText>
            Ever since seeing Halley's Comet as a nine year old child, I have had a fascination with the cosmos. It is the
            planets that really get me fired up, there are few things more majestic than directly observing the bands of
            Jupiter or the rings of Saturn. Luna observing is also breathtaking with the detail of its craters and mountains
            scintillating on the terminator.
          </CVText>
          <CVText>
            While mostly I am a naked eye observer with Google Star-map in hand, I also own an 8" Newtonian Reflector, but do
            not get it out as much as I want to.
          </CVText>
          <CVText>
            In later life I have been drawn to visiting observatories world wide including Mauna Kea, Griffiths, Sydney,
            Reykjavik, Edinburgh and my favourite the UK's own Kielder Observatory.
          </CVText>
        </CVHobby>
        <CVHobby picture_bottom="cooking.jpg" picture_top="baking.jpg" title="Cooking">
          <CVText>I love to cook, but mostly I love to eat!</CVText>
          <CVText>
            Inspired by the simplicity of Mediterranean cooking and the complexity of Japanese, and many other styles in
            between; I find deep satisfaction in preparing and sharing meals. We make our own sausages, cure our own bacon and
            smoke our own salmon.
          </CVText>
          <CVText>
            Food is such a key part of life that getting it right is important. Trying new flavours or honing classic ones;
            selecting and preparing recipes that are tailored to guests needs and wants; using prime ingredients - all parts of
            the joy.
          </CVText>
          <CVText> And if you have done it well, then the eating is excellent.</CVText>
        </CVHobby>
      </CVGridWrapper>
    </CVItem>
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
          Liam Wilson and I talk all things vertical farming, software engineering, data science and loads more. How Aye Built
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
