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
      />
    </CVItem>
    <CVItem icon="article" icon_colour="darkolivegreen" title="Introduction">
      <CVText>I lead teams that get hard things done.</CVText>
      <CVText>
        Technology has always been central to my career, from my time as an
        officer in the Royal Signals to my roles as a software engineer and engineering leader. However, it's not the
        technology itself that drives me; it's the satisfaction of guiding teams of humans to to accomplish challenging feats
        that no individual though they could do.
        Skills I rounded out not only in software engineering, but also in a few years of TV production and volunteer disaster responder training along the way.
      </CVText>
      <CVText>
        My foundational experience in the Army instilled in me a deep appreciation for commitment, loyalty, integrity, and
        professionalism - values I actively seek in others. For over 25 years, I've focused on cultivating business cultures
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
            manage the processes that back up Agile. Focusing on quality, I work to empower the front-line decision makers to
            do the right thing in a dynamic situation and ensure we deliver value. I then work to ensure that these decisions
            are backed across all business functions. I have worked with C-grade executives, sales and marketing teams and with
            professional services teams to help them understand how to be more Agile and how to get the most from working with
            an Agile engine room.
          </CVListItem>
          <CVListItem title="Coaching">
            Line management can all too easily become a transactional interaction of setting tasks and approving leave; I coach
            my direct reports and others to facilitate better engagement and empowerment ultimately driving productivity and
            personal effectiveness. I use active listening to pursue an agenda of autonomy, mastery and purpose for
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
        <CVSection size="medium" title="Culture Creation">
          <CVText>
            Genuine inclusivity is formed around common values, common experiences and meaningful interpersonal engagement. These
            are the hallmarks of a high performance culture, a culture that gets stronger when built on a valuable and valued
            business mission.
          </CVText>
          <CVText>
            Working with others to establish the business vision statement and developing the mission from it is second nature
            to me; part of my military training and part of my personality. Capturing our team values is a harder process but
            perhaps even more valuable as it is those values that resonate with team members. Using the business mission/vision on
            one axis and these values on another produces a map of our behaviours and beliefs. Discussing these in detail
            and being included in their generation is fantastically motivating to teams and gives us a sense of unity and
            pride. This also drives engagement and breaks down interpersonal barriers. If done right then it also makes
            colleagues into friends. Part of the ongoing culture development is need to adapt and change them as we mature
            as a team and a business.
          </CVText>
          <CVText>
            It is one thing to write these things down and even to discuss them, but unless the culture is lived then our
            mission and values hold little value. It takes active leadership and strength of personality to normalise the
            openness and vulnerability of living the culture - both traits I have developed and honed over 25 years of leading
            high performance teams. And moreover, I know how to make it fun.
          </CVText>
        </CVSection>
        <CVSection size="medium" title="Strategic and Operational Goal setting">
          <CVText>
            A team is a group of people with a unified purpose. Setting good strategic goals helps to keep teams in lockstep,
            knowing what they have to deliver to satisfy the the business mission. Good goal-setting also promotes empowerment
            by giving low level decision makers the information they need to make the right decision without having to seek
            permission or approval.
          </CVText>
          <CVText>
            Where strategic goals are the "what" of the business mission, operational goals are the "how" of it. Operational
            goals give structure to approach and help to prioritise the most valuable work for the business/customer, while
            ensuring that there is freedom of action for the outcome to be achieved in efficient and innovative ways.
          </CVText>
        </CVSection>
        <CVSection size="medium" title="Product Engineering">
          <CVText>
            I am a champion of a product focused business approach. As well as the technical advantages of reduced
            maintenance and increased engineering team productivity, the business advantages are also significant. Sales cycles
            are reduced, marketing activities are focused and customer expectations are managed. Good product engineering
            focuses on building/selling what the customer wants, prioritised by what is valuable to the business.
          </CVText>
          <CVText>
            Bringing all departments together to define the product keeps us all aligned while also responding to customer/user
            feed back, market intelligence and gathered usage data. In combination with the strategic goals of the business the
            product definition gives each department a mandate of what to sell, what to build and what to market. It makes us
            predictable to our customers and accountable to our investors. It gives employees at all levels clarity on what our product
            is and where we are going next.
          </CVText>
        </CVSection>
        <CVSection size="medium" title="Business Planning and Budgeting">
          <CVText> Eisenhower tells us that plans are useless, but that planning is essential.</CVText>
          <CVText>
            Business Planning is hard; it is trying to predict the future based on guesses and hopes. Salesmen are ambitious,
            investors are nervous, engineering teams are pessimistic and finance teams want fine details. I can help to
            assimilate all these conflicting opinions and produce a plan that matches the strategic goals of the business,
            whilst being grounded in pragmatic realism. If done correctly, budgets are the natural outcome of business
            planning. I work with the finance function to develop detailed engineering budgets that are informed by the business
            plan.
          </CVText>
          <CVText>
            I have regularly run departmental budgets with SALEX in excess of £10M, CAPEX in excess of £2M and OPEX in excess
            of £5M. I know how to get value for spend, ensuring money is not wasted and budgets are met; I have the confidence to spend when
            required, but the diligence to choose my risks based on evidence.
          </CVText>
        </CVSection>
        <CVSection size="medium" title="Recruitment">
          <CVText>
            Establishing robust recruitment procedures; being inclusive and seeking diversity of thought; relying on team
            members to interview and select their own colleagues; are all underpinning principles of my approach to
            recruitment. Job adverts must reflect our values and advertise our culture - never forget that we are also being
            interviewed.
          </CVText>
          <CVText>
            In order that this does not become an overwhelming burden, I usually work with a recruitment agents.
            I still feel it is our teams responsibility to ensure that every applicant has a positive interaction with our
            team.
          </CVText>
        </CVSection>
        <CVSection size="medium" title="Agile Thinking, Behaviour and Coaching">
          <CVText>
            Agility is the ability to handle and respond to changes in situation that invalidate the plan you have made without
            panicking and often keeping the same desired outcomes. Agility does not value work that does not move you directly
            toward the goal especially if it is costly and is likely to be nugatory when the situation changes. Agility allows
            you to move fast, because you can think fast and react fast and most importantly you can react in unison as a team.
          </CVText>
          <CVText>
            When I first met Agile in the civilian workplace, it resonated strongly with me and my experiences. I love cutting
            to the chase, doing the work that is needed and no more, changing behaviours to make us stronger and faster. I also
            love how in combination with the right inclusive and engaged culture it forges strong bonds of trust in teams.
            When coupled with continuous learning behaviours (natural bedfellows) then teams are better
            prepared for uncertainty and are able to cut though the confusion.
          </CVText>
          <CVText>
            Coaching Agile is about leadership. For line managers it is about teaching them to be leaders not managers - the
            skill of setting direction without issuing instructions. For engineers it is about teaching them to be learning
            followers, which is in fact leadership - in a truly high performing team every member is a leader and a follower in
            equal measure. It is for higher managers that it is tricky, first we must teach them to relinquish control and
            trust that teams will perform to their best - then we need to stop them asking for reports; stop wasting time on
            work that does not move us directly toward the goal.
          </CVText>
          <CVText>
            Agile is hard to get right and requires superhuman levels of trust that needs to be paid back with engagement and
            performance. But the payoffs for the business are vast collectively and as individuals
          </CVText>
        </CVSection>
        <CVSection size="medium" title="Partnership and Relationship Building">
          <CVText>
            No company can exist in a vacuum; choosing the right partners and suppliers is key to success. I am experienced in
            assessing supplier capability and technical fit, whether that's for outsourcing specific projects or buying in
            enablement software. I am also experienced in the technical aspects of creating a partner ecosystem to satisfy our
            customer needs.
          </CVText>
          <CVText>
            Once partnerships have been made, maintaining the relationship relies on regular communication where you can
            both give and, more importantly, receive honest feedback. Feedback about the levels of service, capability and
            engagement. It requires trust and pragmatism, traits that I can espouse and inspire in others. I have a history of
            being able to create robust relationships that remain solid even through uncomfortable and critical conversations.
          </CVText>
        </CVSection>
      </CVItem>
      <CVItem icon="data_object" icon_colour="saddlebrown" level="two" title="Technical Skills">
        <CVSection size="medium" title="Product Engineering">
          <CVText>
            We gain benefits in support and maintenance when delivering homogenous product to all our users - it also
            simplifies the sales and marketing cycles. Choosing what a single unified product looks like, what features it
            contains and what will be built next is the job of product engineering.
          </CVText>
          <CVText>
            Experimentation, data gathering, feedback and analysis are the cornerstones of product engineering. I make product
            decision based on the empirical data; bringing a team of product owners, UX engineers and software engineers
            together with the whole business to define the product and the priorities. We eschew customer bespoke code and
            functionality, especially if tied to a sales cycle, but instead build the ability to add extensions and plug-ins
            that will work for any sub-set of users.
          </CVText>
          <CVText> Our outcomes are focused on the user base trying to provide:</CVText>
          <CVListItem title="Reliability"> The product works with few bugs and is always available.</CVListItem>
          <CVListItem title="Usability">
            The user can operate the product to achieve their outcome without the product being burdensome or getting in the
            way.
          </CVListItem>
          <CVListItem title="Maintainability">
            Bugs can be, and are, fixed rapidly - this is reliant on good coding standards and engineering discipline.
          </CVListItem>
          <CVListItem title="Extensibility">
            New features requested by users are delivered rapidly usually as an MVP experiment to be able to gather more data.
          </CVListItem>
          <CVListItem title="Predictability">
            Product engineering should give us a roadmap that we can publish and stick to making it clear what our users can
            expect.
          </CVListItem>
        </CVSection>
        <CVSection size="medium" title="System Architecture">
          <CVText>
            I see this in layers of complexity; at the base I select the right code, tools, frameworks etc. Moving up I define
            service functionality and how the services combine to form an application. At the top I see how applications slot
            together with 3rd party tooling and software within an operational environment to satisfy the user's pressing need.
          </CVText>
          <CVText>
            Overall I work to keep things as simple as practical whilst maintaining resilience and extensibility. Through
            separation of concerns we keep services streamlined and focused, making them easy to maintain. Extraction of
            library functionality speeds development and makes the architecture/code easier to read and understand. Selection
            and implementation of modern protocols and backing technologies (REST, MQTT, Kubernetes, Graph DB, etc.) ensures
            the user gets the right data at the right time and that software engineers can develop new functionality using
            simple building blocks.
          </CVText>
          <CVText>
            Designing cloud based, micro-service applications is my bread and butter; usually SaaS, usually B2B, usually
            multi-tenant. Designing in high levels of automation and robust communications pathways results in a platform the
            user can trust to be accurate and timely.
          </CVText>
        </CVSection>
        <CVSection size="medium" title="Systems Integration">
          <CVText>
            No application exists in a vacuum. Systems must integrate with one and other to achieve the users needs; sharing
            data and telemetry and exposing a command/action interface.
          </CVText>
          <CVText>
            Integration is as much about the abstraction and modelling of your application as it is about the actual transfer
            of data. You must ensure that what you are exposing is simple enough that the far end can get the data or send the
            command they need without needing knowledge of your application internals and without giving away your USP.
            Once it is modelled you can decide on the appropriate protocols and data languages - if done right then more
            protocols and data languages can be added, because the underlying semantics do not change.
          </CVText>
          <CVText>
            In recent years I have worked on industrial automation from ERP to PLC and everything in between. Prior to that I
            consumed medical sensor data to feed a treatment decision engine. In both cases leveraging REST, MQTT with complex
            translation middleware. Success was borne out by good design and great documentation (OAS, AsyncAPI, etc.).
          </CVText>
        </CVSection>
        <CVSection size="medium" title="DevOps Patterns">
          <CVText>
            Whether the aim is CI/CD or more simple automated testing and deployment, I design DevOps behaviours in the teams
            that speed up software engineers and increase the quality and reliability of the application.
          </CVText>
          <CVText>
            Great DevOps has it foundation in an agreed set of coding and development standards. These ensure consistency
            between the most seasoned and most raw software engineers in the team. Consistency breeds the ability to automate,
            leaving the engineers to do the important stuff. Once the solution has been written and properly reviewed then the
            automation kicks in to deliver that value into the application. It starts simple with automated build and test
            based on repo branching rules and then advances into automated artifact deployment. I often add static code
            analysis and automated documentation to the workflows. The use of feature flags allows engineers to deploy
            experiments easily and for UI/UX engineers to conduct A/B testing. I also champion the Infrastructure as Code (IaC)
            pattern allowing software engineers to deploy the services they need all as part of the code change - this is
            especially powerful when coupled with tools such as Kubernetes and Docker.
          </CVText>
          <CVText>
            In advanced DevOps practice I advocate a platform team that provides the rest of the software team with the tools
            needed to build the application. That might be an abstraction on the IaC framework; or self-hosted package
            libraries; or common service boilerplate like authentication or notifications.
          </CVText>
        </CVSection>
        <CVSection size="medium" title="Site Reliability Engineering">
          <CVText>
            Observability is key to knowing how the application is performing. It shows us errors before they are reported by
            our customers and helps to minimise down time. There is a lot of work in instrumenting each service from DB to
            frontend and everything in between, ensuring that events can be traced across service boundaries, that logs are
            informative and at the right level of "noise". I have used both New Relic and Grafana ecosystems for this in the
            past.
          </CVText>
          <CVText>
            Recovery and restoration from an incident relies on good backups and well defined IaC. Cloud platforms are good at
            being able to establish replacement compute and database infrastructure, and with tools like Kubernetes and
            Terraform services can also be quickly brought back to life. Data back-ups are needed to rehydrate the services
            once they are back up. Data integrity checks also ensure that the data on your system is consistent over time and
            can be trusted.
          </CVText>
          <CVText>
            Whilst the role of Site Reliability Engineer is a discipline in its own right (replaces Sys Admin), the function of
            site reliability engineering belongs to the whole software team (in fact it is part of the DevOps practice). To
            that end I firmly believe that all software engineers should at least understand these tools and take shifts on out
            of hours support to maintain their own software.
          </CVText>
        </CVSection>
        <CVSection size="medium" title="Software Engineering">
          <CVText>
            My first software job was as an engineer writing PHP. Since then I have written in many other languages and
            protocols - what I know is that once you truly understand context free languages, then the difference between
            implementation is syntax - the semantic remains the same. I have also learned that every language is good at some
            things and bad at others, so there is no best or worst language - as with many trades it is about choosing the
            right tools for this job. My OO design is strong and I have experience with Graph, KV, document and relational DBs.
            My main language these days is Python with a smattering of JS/TS, but back-end focused - although it has been some
            time since I was a hands on production developer.
          </CVText>
        </CVSection>
        <CVSection size="medium" title="Infrastructure and Networking">
          <CVText>
            I have basic networking skills learned in the military and honed over 15 years in business. I know simple DNS and
            DHCP and have the ability to pull together a multi-site VPN. I even have experience of cabling up entire buildings
            including patch panels, switches and reach-back.
          </CVText>
          <CVText>
            I also know my way around Linux servers with the ability to install and upgrade software - including through
            virtualization tools like Docker Compose/Swarm.
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
            Having selected and trained my replacement team manager, I took the
            opportunity to focus on the technical aspects of how IGS products fit in to the wider customer environment.
            Specifically how the product interoperates with the remainder of our customers' business and their factory. The key
            was to understand the customer perspective allowing them to use our product to solve their business problems
            without exposing to (or burdening them with) our internal business logic. The technical solution is a combination of
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
            Northface Ventures team who had also come on board, this was a great opportunity to build a shared culture of success,
            excitement and commitment.
          </CVText>
          <CVText>
            My role expanded to include the development of process and unity in the team. I was still responsible for
            recruitment and for the business aspects of running the department, but now also the line management of the
            individuals; our working agreements and practices; the quality and productivity of our output. Despite the
            lockdowns of 2020-2022 we grew the team from 12 to over 40 and produced software that was fit for purpose and
            ran all of the companies experimental products.
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
            Intelligent Growth Solutions are a start up at the cutting edge of Vertical Farming technology; automating many of
            the processes; using low voltage systems to make them more energy efficient; ensuring only the most beneficial
            light frequencies are used by the LEDs.
          </CVText>
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
            My role as Head of Software Engineering was to manage a team of 20+ engineers, testers, DevOps engineers and product
            owners in delivery of the digital health applications. As well as owning the architecture and development process,
            I coded solutions and was heavily involved in the tooling, integration and deployment mechanisms for the team. I also
            worked with my data engineering and systems medicine peers to ensure a smooth flow of data and requirements
            throughout the business model.
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
            of transformation from stale software house to vibrant product-driven company. After that success we decided to share what we had learned.
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
            During this time I also worked with the wider business to help the professional services department to convert to using
            agile project management. I also spent 2 months in Sydney working with our Australian office, primarily to
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
            I have sought adventure in many forms, most recently in long distance hiking. In the summer
            of 2022, I completed ~1400 miles of the
            <a href="https://www.pcta.org/">Pacific Crest Trail</a>. Setting off from the Mexican border I hiked north
            through California and Oregon (skipping some bits that were on fire) and
            finished on the southern Washington State border. It was amazing and if you have a spare couple of hours, ask me
            about it.
          </CVText>
          <CVText>
            In winter of 2024 I covered ~600 miles of the <a href="https://www.teararoa.org.nz/">Te Araroa</a> trail in New
            Zealand. Starting in the middle of North Island heading south, crossing the Cook Strait and finishing near Nelson. This
            was a significantly different adventure, that included some canoeing and lots of hitch-hiking.
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
            A bit of healthy competition can also be good for the soul, and can help an established team to let off
            some steam and build those bragging rights rivalries. The shared experiences can build trust and camaraderie that
            can elevate colleagues to friends.
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
            selecting and preparing recipes that are tailored to guests needs and wants; using prime ingredients - all parts
            of the joy.
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
