<script lang="ts" setup>
import CvItem from '@/components/CVItem.vue'
import CVContacts from '@/components/CVContacts.vue'
import CVSkill from '@/components/CVSkill.vue'
import CVListItem from '@/components/CVListItem.vue'
import CVText from '@/components/CVText.vue'
</script>

<template>
  <main>
    <CvItem :expanded="true" icon="info" icon_colour="slateblue" title="Contact Details">
      <CVContacts
        email="gordy.wills@gmail.com"
        led-in="https://www.linkedin.com/in/gordywills/"
        tel="+44 7710 416 608"
        web="https://gordywills.com/"
      />
    </CvItem>
    <CvItem icon="article" icon_colour="darkolivegreen" title="Introduction">
      <CVText>I lead teams that get hard things done.</CVText>
      <CVText>
        While I briefly ventured into TV production, technology has always been central to my
        career, from my time as an officer in the Royal Signals to my roles as a software engineer
        and engineering leader. However, it's not the technology itself that drives me; it's the
        satisfaction of guiding teams of humans to to accomplish challenging feats that no
        individual though they could do.
      </CVText>
      <CVText>
        My foundational experience in the Army instilled in me a deep appreciation for commitment,
        loyalty, integrity, and professionalism, values I actively seek in others. For over 25
        years, I've focused on cultivating business cultures where people feel a sense of safety and
        belonging. This involves building a platform of trust, fostering individual growth in skills
        and confidence, and creating cohesive teams that enjoy working and playing together.
      </CVText>
      <CVText>
        As a lifelong learner, or perhaps "nerd adjacent", I love new things. I'm passionate about
        exploring new ideas across all fields, though primarily technology. We learn more things
        pushing boundaries than staying safely inside them. A key goal of mine, in any organisation,
        is to foster a learning-oriented mindset across all business functions. Over 25 years I have
        had my share of failed experiments, but these have led me to insights about myself and how
        to lead technology businesses effectively.
      </CVText>
      <CVText>
        I am also a human, I enjoy long distance hiking, tackling a crossword and engaging with
        cerebral computer games. My wonderful partner inspires me everyday.
      </CVText>
    </CvItem>
    <CvItem icon="person_celebrate" icon_colour="saddlebrown" title="Skills">
      <CvItem icon="mindfulness" icon_colour="cornflowerblue" level="two" title="Business Skills">
        <CVSkill title="Leadership">
          <CVListItem title="Agile">
            From Scrummaster of a single team to leading an engineering department of 5 Scrum teams,
            I have the experience to manage the processes that back up Agile. Focusing on quality, I
            work to empower the front line decision makers to do the right thing in a dynamic
            situation and ensure we deliver value. I then work to ensure that these decisions are
            backed across all business functions. I have worked with C-grade executives, sales and
            marketing teams and with professional services teams to help them understand how to be
            more Agile and how to get the most from working with an Agile engine room.
          </CVListItem>
          <CVListItem title="Coaching">
            Line management can all too easily become a transactional interaction of setting tasks
            and approving leave; I coach my direct reports and others to facilitate better
            engagement and empowerment ultimately driving productivity and personal effectiveness. I
            use active listening methods to pursue an agenda of autonomy, mastery and purpose for
            those that I am coaching and seek to balance directive instruction with collaboration.
          </CVListItem>
          <CVListItem title="The Servant">
            Servant leadership is fundamental to an Agile mindset and to great coaching. My wide
            range of experiences in the military, TV, software development and charity volunteering
            have given me the confidence to trust front line decision makers and the understanding
            to be able to facilitate the conditions for them to succeed. These behaviours are key to
            an engaged workforce and a sustainable productive environment.
          </CVListItem>
          <CVListItem title="Project Management">
            From military procurement through documentary film making to software delivery, I have
            project management experience in many different contexts. I am familiar with PRINCE2,
            Gantt Chart, Balanced Scorecard, ITIL, Critical Path, and latterly Scrum and Kanban
            methodologies for managing projects.
          </CVListItem>
        </CVSkill>
        <CVSkill title="Partnership and Relationship Building">
          <CVText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a pellentesque risus. Mauris
            quis turpis arcu. Proin orci mi, varius a nibh vitae, vestibulum maximus mi. Aliquam erat
            volutpat. Fusce consectetur volutpat leo, ac convallis lorem. Fusce id malesuada lorem,
          </CVText>
        </CVSkill>
        <CVSkill title="Business Planning and Budgeting">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a pellentesque risus. Mauris
          quis turpis arcu. Proin orci mi, varius a nibh vitae, vestibulum maximus mi. Aliquam erat
          volutpat. Fusce consectetur volutpat leo, ac convallis lorem. Fusce id malesuada lorem,
        </CVSkill>
        <CVSkill title="Strategic and Operational Goal setting">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a pellentesque risus. Mauris
          quis turpis arcu. Proin orci mi, varius a nibh vitae, vestibulum maximus mi. Aliquam erat
          volutpat. Fusce consectetur volutpat leo, ac convallis lorem. Fusce id malesuada lorem,
        </CVSkill>
        <CVSkill title="Recruitment">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a pellentesque risus. Mauris
          quis turpis arcu. Proin orci mi, varius a nibh vitae, vestibulum maximus mi. Aliquam erat
          volutpat. Fusce consectetur volutpat leo, ac convallis lorem. Fusce id malesuada lorem,
        </CVSkill>
        <CVSkill title="Culture Creation">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a pellentesque risus. Mauris
          quis turpis arcu. Proin orci mi, varius a nibh vitae, vestibulum maximus mi. Aliquam erat
          volutpat. Fusce consectetur volutpat leo, ac convallis lorem. Fusce id malesuada lorem,
        </CVSkill>
        <CVSkill title="Agile Thinking, Behaviour and Coaching">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a pellentesque risus. Mauris
          quis turpis arcu. Proin orci mi, varius a nibh vitae, vestibulum maximus mi. Aliquam erat
          volutpat. Fusce consectetur volutpat leo, ac convallis lorem. Fusce id malesuada lorem,
        </CVSkill>
      </CvItem>
      <CvItem icon="data_object" icon_colour="darkgoldenrod" level="two" title="Technical Skills">
        <CVSkill title="System Architecture">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a pellentesque risus. Mauris
          quis turpis arcu. Proin orci mi, varius a nibh vitae, vestibulum maximus mi. Aliquam erat
          volutpat. Fusce consectetur volutpat leo, ac convallis lorem. Fusce id malesuada lorem,
        </CVSkill>
        <CVSkill title="Systems Integaration">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a pellentesque risus. Mauris
          quis turpis arcu. Proin orci mi, varius a nibh vitae, vestibulum maximus mi. Aliquam erat
          volutpat. Fusce consectetur volutpat leo, ac convallis lorem. Fusce id malesuada lorem,
        </CVSkill>
        <CVSkill title="DevOps Patterns">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a pellentesque risus. Mauris
          quis turpis arcu. Proin orci mi, varius a nibh vitae, vestibulum maximus mi. Aliquam erat
          volutpat. Fusce consectetur volutpat leo, ac convallis lorem. Fusce id malesuada lorem,
        </CVSkill>
        <CVSkill title="Site Reliability Engineering">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a pellentesque risus. Mauris
          quis turpis arcu. Proin orci mi, varius a nibh vitae, vestibulum maximus mi. Aliquam erat
          volutpat. Fusce consectetur volutpat leo, ac convallis lorem. Fusce id malesuada lorem,
        </CVSkill>
        <CVSkill title="Software Engineering">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a pellentesque risus. Mauris
          quis turpis arcu. Proin orci mi, varius a nibh vitae, vestibulum maximus mi. Aliquam erat
          volutpat. Fusce consectetur volutpat leo, ac convallis lorem. Fusce id malesuada lorem,
        </CVSkill>
        <CVSkill title="Infrastructure and Networking">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a pellentesque risus. Mauris
          quis turpis arcu. Proin orci mi, varius a nibh vitae, vestibulum maximus mi. Aliquam erat
          volutpat. Fusce consectetur volutpat leo, ac convallis lorem. Fusce id malesuada lorem,
        </CVSkill>
      </CvItem>
    </CvItem>
    <CvItem icon="history" icon_colour="midnightblue" title="Work History"></CvItem>
    <CvItem icon="school" icon_colour="slategray" title="Education"></CvItem>
    <CvItem icon="volunteer_activism" icon_colour="navy" title="Volunteering"></CvItem>
    <CvItem icon="link" icon_colour="darkslategray" title="Links"></CvItem>
    <CvItem
      icon="stadia_controller"
      icon_colour="mediumseagreen"
      title="Hobbies and Interests"
    ></CvItem>
    <CvItem icon="sports" icon_colour="peru" title="Referees"></CvItem>
    <CvItem icon="file_save" icon_colour="crimson" title="PDF Download" :no_print="true"></CvItem>
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
