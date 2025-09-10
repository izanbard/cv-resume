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
          <CVListItem title="Product Focus">
            Champion a product-focused approach that simplifies maintenance complexity and version management.
          </CVListItem>
          <CVListItem title="Data-Driven Decisions">
            Make product decisions based on empirical data from experimentation, feedback, and analysis.
          </CVListItem>
          <CVListItem title="User-Centric Outcomes">
            Drive development focused on key user outcomes: Reliability, Usability, Maintainability, Extensibility, and
            Predictability.
          </CVListItem>
          <CVListItem title="Collaboration">
            Align product owners, UX, and software engineers with business goals to define product roadmaps and priorities.
          </CVListItem>
        </CVSection>
        <CVSection size="medium" title="Software Architect">
          <CVListItem title="System Architecture">
            Design simple, resilient, and extensible systems using a layered approach from code selection to macro-level
            application integration.
          </CVListItem>
          <CVListItem title="Core Technologies">
            Specialize in designing cloud-based, multi-tenant SaaS applications, with hands-on experience in microservices,
            REST, MQTT, Kubernetes, and Graph DB.
          </CVListItem>
          <CVListItem title="Automation">
            Focus on designing high levels of automation and robust communication pathways to build trusted, timely platforms.
          </CVListItem>
          <CVListItem title="Systems Integration">
            Architect and implement systems that share data and telemetry, and expose simple, effective command interfaces.
          </CVListItem>
          <CVListItem title="Cross-Industry Experience">
            Expertise in industrial automation (from ERP to PLC), as well as consuming medical sensor data for treatment
            decision engines.
          </CVListItem>
        </CVSection>
        <CVSection size="medium" title="Technical Leadership">
          <CVListItem title="Code Efficiency">
            Emphasize separation of concerns and library extraction to create streamlined, maintainable services and accelerate
            development.
          </CVListItem>
          <CVListItem title="Standards">
            Leverage modern protocols and standards like REST, MQTT, OAS, and AsyncAPI to ensure interoperability and
            maintainability.
          </CVListItem>
          <CVListItem title="DevOps & CI/CD">
            Design and implement DevOps practices that increase software quality, reliability, and engineering velocity.
          </CVListItem>
          <CVListItem title="Automation Focus">
            Advocate for and implement automated build, test, and deployment pipelines based on repository branching rules.
          </CVListItem>
          <CVListItem title="Team Ownership">
            Instill a culture where all software engineers understand and take ownership of their code's reliability and
            support.
          </CVListItem>
        </CVSection>
        <CVSection size="medium" title="Site Reliability Engineering (SRE)">
          <CVListItem title="Observability & Monitoring">
            Expert in implementing observability stacks (New Relic, Grafana) to proactively identify issues and trace events
            across service boundaries.
          </CVListItem>
          <CVListItem title="Incident Response">
            Establish recovery and restoration procedures using IaC, Kubernetes, and Terraform, ensuring data integrity and
            rapid service restoration.
          </CVListItem>
          <CVListItem title="Infrastructure & Networking">
            Proficient in basic networking principles including DNS, DHCP, and multi-site VPNs.
          </CVListItem>
          <CVListItem title="Advanced Practices">
            Champion Infrastructure as Code (IaC), static code analysis, feature flags, and the creation of platform teams to
            support development.
          </CVListItem>
        </CVSection>
        <CVSection size="medium" title="Hands on Software Engineering">
          <CVListItem title="Code Writing">
            Experienced back-end software engineer with a strong understanding of context-free languages and object-oriented
            design.
          </CVListItem>
          <CVListItem title="Languages & Databases">
            Proficient in Python and JavaScript/TypeScript, with hands-on experience with Graph, KV, document, and relational
            databases.
          </CVListItem>
          <CVListItem title="Systems Administration">
            Skilled in Linux server administration and software deployment via Docker Compose/Swarm.
          </CVListItem>
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
            IGS Ltd is a supplier of fully automated indoor farming equipment for food production at industrial scale.
          </CVText>
          <CVListItem>
            Designed and led the technical strategy for integrating IGS products into customer environments, ensuring seamless
            interoperability with factory management software.
          </CVListItem>
          <CVListItem>
            Created a prototype coordinator to validate design assumptions and define requirements for both clients and
            technology partners.
          </CVListItem>
          <CVListItem>
            Established a framework for client-centric integration, leveraging software APIs and clearly defined hardware
            touchpoints.
          </CVListItem>
          <CVListItem>
            Managed partner and supplier relationships, aligning them with the product vision and internal hardware/software
            teams.
          </CVListItem>
        </CVHistoryItem>
        <CVHistoryItem :expanded="true" end="Nov 2022" icon="igs.png" start="Oct 2019" title="Head of Software, IGS Ltd">
          <CVListItem>
            Grew the software engineering team from 12 to over 40 during the challenging 2020-2022 lockdown period.
          </CVListItem>
          <CVListItem>
            Designed IGS core software product as multitenant SaaS software running multiple IGS indoor farms globally.
          </CVListItem>
          <CVListItem>
            Oversaw all aspects of department management, including recruitment, budget, line management, and the development
            of working agreements and cultural practices.
          </CVListItem>
          <CVListItem>
            Successfully delivered all software for the company's experimental products, ensuring high quality and
            fit-for-purpose functionality.
          </CVListItem>
          <CVListItem>
            Navigated the complexities of remote and hybrid work, strengthening team cohesion and devolving greater autonomy as
            the business matured.
          </CVListItem>
        </CVHistoryItem>
        <CVHistoryItem
          :expanded="true"
          end="Oct 2019"
          icon="igs.png"
          start="Jul 2019"
          title="Software Team Architect, IGS Ltd"
        >
          <CVListItem>
            Hired as employee #11 to build the initial software team and establish a culture to handle complex farm management
            software requirements.
          </CVListItem>
          <CVListItem>
            Designed the software team's structure and contributed to overall company business planning, departmental
            budgeting, and hiring policies.
          </CVListItem>
          <CVListItem>
            Aided the product management team in defining product requirements and setting early-stage boundaries for both
            hardware and software.
          </CVListItem>
        </CVHistoryItem>
        <CVHistoryItem end="Jul 2019" icon="sensyne.png" start="Jul 2018" title="Head of Software Engineering, Sensyne Health">
          <CVListItem>
            Led and managed a team of 20+ software engineers, testers, DevOps engineers, and product owners in the delivery of
            digital health applications for the NHS.
          </CVListItem>
          <CVListItem>
            Oversaw the entire software development lifecycle, from architecture and tooling to integration and deployment.
          </CVListItem>
          <CVListItem>
            Streamlined data and requirements flow by collaborating with data engineering and systems medicine teams to support
            patient population analysis and drug discovery.
          </CVListItem>
          <CVListItem>
            Contributed hands-on coding to projects while maintaining a focus on improving team processes and quality.
          </CVListItem>
        </CVHistoryItem>
        <CVHistoryItem end="Mar 2018" icon="tr.png" start="Oct 2017" title="Chief Instructor, Team Rubicon UK">
          <CVListItem>
            Led and planned pre- and post-deployment training for over 100 volunteers assisting in the wake of Hurricanes Irma
            and Maria.
          </CVListItem>
          <CVListItem>
            Developed and delivered induction training packages to hundreds of new volunteers, ensuring they were fully
            prepared to respond to disaster zones.
          </CVListItem>
          <CVListItem>
            Ensured volunteers were equipped with critical skills to aid in disaster survival and re-establishment of normal
            routines.
          </CVListItem>
        </CVHistoryItem>
        <CVHistoryItem end="Jul 2018" icon="nfv.png" start="Sep 2016" title="Agile Coach/Engineer, Northface Ventures">
          <CVListItem>
            Provided consultancy to engineering departments, transforming them into high-performing, product-driven teams.
          </CVListItem>
          <CVListItem>
            Assessed workflows and processes to identify areas for improvement and eliminate wasteful practices.
          </CVListItem>
          <CVListItem>
            Coached engineers and engineering managers on Agile concepts, including Scrum and Kanban methodologies.
          </CVListItem>
          <CVListItem>
            Implemented modern engineering practices and fostered a collaborative culture to streamline end-to-end product
            delivery.
          </CVListItem>
        </CVHistoryItem>
        <CVHistoryItem
          end="Aug 2016"
          icon="workplace.png"
          start="Apr 2014"
          title="Prod Development Manager, Workplace Systems"
        >
          <CVListItem>
            Led and managed a team of 30+ software and QA engineers to deliver the flagship enterprise application.
          </CVListItem>
          <CVListItem>
            Scaled Agile practices across the department, creating five Scrum teams and implementing a dedicated Scrumban team
            for customer support and performance.
          </CVListItem>
          <CVListItem>
            Initiated and grew a DevOps team, integrating infrastructure with engineering and automating build and deployment
            processes.
          </CVListItem>
          <CVListItem>
            Architecturally led the upgrade of the product to PHP 7.0 and MySQL 5.6, enabling higher coding standards and
            accelerating refactoring efforts and improving overall performance.
          </CVListItem>
          <CVListItem>
            Collaborated with international teams in Sydney and Detroit to standardize practices, foster a shared culture, and
            assist in the adoption of Scrum.
          </CVListItem>
        </CVHistoryItem>
        <CVHistoryItem
          end="Apr 2014"
          icon="workplace.png"
          start="Mar 2013"
          title="Software Delivery Manager, Workplace Systems"
        >
          <CVListItem>
            Led two Scrum teams as Scrum Master during a company-wide transformation from a services to a product-led
            organization.
          </CVListItem>
          <CVListItem>
            Developed and led a recruitment program to attract new talent and address a significant talent drain.
          </CVListItem>
          <CVListItem>
            Spearheaded the company’s first DevOps initiative by converting manual deployment processes into scripted,
            automated procedures.
          </CVListItem>
          <CVListItem>
            Led the product's major upgrade to PHP 5.3 and brought a new Zend-based mobile offering to fruition.
          </CVListItem>
          <CVListItem>
            Acted as the senior tech leader during a 3-month CTO vacancy, ensuring business continuity and assisting the CEO
            with client and employee reassurance.
          </CVListItem>
        </CVHistoryItem>
        <CVHistoryItem end="Mar 2013" icon="workplace.png" start="Sep 2011" title="PHP Software Engineer, Workplace Systems">
          <CVListItem>
            Maintained and enhanced a large, procedural codebase of over 500k lines of PHP and 100k files.
          </CVListItem>
          <CVListItem>
            Reduced technical debt by refactoring code to simplify its structure and prepare it for later object-oriented
            conversion.
          </CVListItem>
          <CVListItem>
            Consolidated version control and ticketing systems and standardized deployment processes across distributed teams.
          </CVListItem>
        </CVHistoryItem>
        <CVHistoryItem end="Sep 2011" icon="php.png" start="Mar 2008" title="Self Employed Web Developer">
          <CVListItem>
            Developed custom browser applications and maintained/enhanced complex brand websites for a range of clients,
            including Oxford Outcomes, smartlogic.com, and shirtworks.co.uk.
          </CVListItem>
          <CVListItem>
            Delivered front-end and back-end solutions, from greenfield projects to the maintenance of established systems.
          </CVListItem>
          <CVListItem>
            Gained experience in client management, requirements gathering, and delivering solutions under contract-based
            deadlines.
          </CVListItem>
        </CVHistoryItem>
        <CVHistoryItem
          end="Oct 2011"
          icon="tv.png"
          start="Mar 2008"
          title="Freelance Assistant Producer/Location Mgr, Film and TV"
        >
          <CVListItem>
            Employed in documentary and comedy productions, including for companies like Tiger Aspect and TwoFour.
          </CVListItem>
          <CVListItem>
            Cultivated the ability to rapidly build and manage high-performing teams to ensure high-quality delivery from
            project inception.
          </CVListItem>
          <CVListItem>
            Experienced fast-paced, contract-based environment, with a strong focus on immediate results and tight deadlines.
          </CVListItem>
        </CVHistoryItem>
        <CVHistoryItem end="Mar 2008" icon="army.png" start="Aug 1998" title="British Army Officer, Royal Signals">
          <CVListItem title="Command & Leadership">
            Commanded units of up to 200 soldiers, providing critical communications and IT services in various global
            locations.
          </CVListItem>
          <CVListItem title="Training & Development">
            Served as a recruit training instructor for technical apprentices, mentoring personnel and developing technical
            skills.
          </CVListItem>
          <CVListItem title="Technical & Procurement">
            Managed a global communications network and procured urgently needed operational equipment for deployments in
            Bosnia, Kosovo, Iraq, and Afghanistan.
          </CVListItem>
          <CVListItem title="Specialized Expertise">
            Appointed as the Army's competent authority for Electronic Warfare, overseeing all projects, research, and industry
            partnerships.
          </CVListItem>
          <CVListItem title="Security Clearance"> Held Developed Vetting (DV) security clearance (now lapsed). </CVListItem>
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
            As a volunteer with REACT Disaster Response since April 2020, I have played a key role in both domestic and
            international operations. During the initial COVID-19 pandemic response, I was responsible for establishing and
            managing the National Volunteer Coordination Centre. In this role, I oversaw the registry of all major volunteer
            organizations and material donations, ensuring they were directed to local council disaster managers where they
            were most needed. I also supervised response teams that operated the UK's temporary mortuary system and established
            back offices for the Nightingale Hospitals. After the initial crisis, I participated in three COVID-19 surge
            testing operations, delivering door-to-door PCR kits in vulnerable neighborhoods across the West Midlands.
          </CVText>
        </CVHistoryItem>
        <CVHistoryItem end="Jun 2020" icon="tr.png" start="Apr 2014" title="Team Rubicon UK">
          <CVText>
            As a volunteer responder for Team Rubicon UK from April 2014 to June 2020, I leveraged my full range of skills and
            experience to assist communities in the aftermath of disasters. My work encompassed both on-the-ground deployments
            and remote operational management. I deployed to the Philippines in response to an earthquake, where I led efforts
            to rebuild schools and medical facilities for impoverished communities in Cebu City. Later, from our UK-based HQ, I
            managed and supervised response operations following Hurricanes Irma and Maria, coordinating teams in the British
            Virgin Islands, Barbados, and Turks and Caicos. My experience extended to overseeing operations in Sri Lanka after
            Cyclone Mora.
          </CVText>
        </CVHistoryItem>
      </CVSection>
    </CVItem>
    <CVItem icon="stadia_controller" icon_colour="mediumseagreen" title="Hobbies and Interests">
      <CVGridWrapper :columns="4">
        <CVHobby picture_bottom="pct.png" picture_top="adventuring.jpg" title="Adventuring">
          <CVText>
            My passion for adventure and the outdoors has led me to tackle some of the world's most challenging long-distance
            hiking trails. I've completed approximately 1,400 miles of the Pacific Crest Trail in the United States, from the
            Mexican border through California and Oregon, and 600 miles of the Te Araroa trail in New Zealand.
          </CVText>
          <CVText>
            These journeys, filled with discovery and adaptation, have further sharpened my resilience and problem-solving
            skills. My ability to thrive in complex and dynamic situations, navigating both planned and unforeseen challenges,
            is directly transferable to a professional environment.
          </CVText>
        </CVHobby>
        <CVHobby picture_bottom="board.jpg" picture_top="computer.webp" title="Gaming">
          <CVText>
            I am an avid gamer, drawn to the strategic and problem-solving aspects of both tabletop and online cooperative
            gameplay. This hobby hones my ability to think flexibly and adapt to new rules and environments, while reinforcing
            the importance of collaboration and a shared purpose.
          </CVText>
          <CVText>
            I also appreciate how a bit of friendly competition can build camaraderie and strengthen team bonds. This interest
            in shared experiences and trust-building is something I value both in my personal life and in a professional
            setting, where it can help elevate colleagues to friends and create a more cohesive and productive team.
          </CVText>
        </CVHobby>
        <CVHobby picture_bottom="observatory.jpg" picture_top="astronomy.jpg" title="Astronomy">
          <CVText>
            My fascination with the cosmos began as a child and has continued throughout my life. I have a keen interest in
            planetary and lunar observation both with the naked eye and with my 8" Newtonian Reflector. I particularly love the
            majestic bands and moons of Jupiter and the stunning detail of the lunar surface.
          </CVText>
          <CVText>
            This hobby, which has also led me to visit observatories worldwide, including Mauna Kea, Griffiths, Sydney,
            Reykjavik, Edinburgh and my favourite the UK's own Kielder Observatory, cultivates my natural curiosity and
            attention to detail.
          </CVText>
        </CVHobby>
        <CVHobby picture_bottom="cooking.jpg" picture_top="baking.jpg" title="Cooking">
          <CVText>I love to cook, but mostly I love to eat!</CVText>
          <CVText>
            I'm an enthusiastic cook, inspired by bold flavours and the beautiful aromas of herbs and spices. I find deep
            satisfaction in preparing and sharing meals with others, it brings the process to life creating connections and
            forging bonds. Making my own sausages, curing bacon, and smoking salmon, requires attention to
            detail, and discipline to produce a high-quality results.
          </CVText >
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
