<script lang="ts" setup>
import CvItem from '@/components/CVItem.vue'
import CVContacts from '@/components/CVContacts.vue'
import CVSkill from '@/components/CVSkill.vue'
import CVListItem from '@/components/CVListItem.vue'
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
    <CvItem icon="article" icon_colour="olivedrab" title="Introduction">
      <p>I lead teams that get hard things done.</p>
      <p>
        While I briefly ventured into TV production, technology has always been central to my
        career, from my time as an officer in the Royal Signals to my roles as a software engineer
        and engineering leader. However, it's not the technology itself that drives me; it's the
        satisfaction of guiding teams of humans to to accomplish challenging feats that no
        individual though they could do.
      </p>
      <p>
        My foundational experience in the Army instilled in me a deep appreciation for commitment,
        loyalty, integrity, and professionalism, values I actively seek in others. For over 25
        years, I've focused on cultivating business cultures where people feel a sense of safety and
        belonging. This involves building a platform of trust, fostering individual growth in skills
        and confidence, and creating cohesive teams that enjoy working and playing together.
      </p>
      <p>
        As a lifelong learner, or perhaps "nerd adjacent", I love new things. I'm passionate about
        exploring new ideas across all fields, though primarily technology. We learn more things
        pushing boundaries than staying safely inside them. A key goal of mine, in any organisation,
        is to foster a learning-oriented mindset across all business functions. Over 25 years I have
        had my share of failed experiments, but these have led me to insights about myself and how
        to lead technology businesses effectively.
      </p>
      <p>
        I am also a human, I enjoy long distance hiking, tackling a crossword and engaging with
        cerebral computer games. My wonderful partner inspires me everyday.
      </p>
    </CvItem>
    <CvItem icon="person_celebrate" icon_colour="saddlebrown" title="Skills">
      <CvItem icon="person_celebrate" icon_colour="saddlebrown" level="two" title="Soft Skills">
        <CVSkill title="Leadership">
          <CVListItem title="Agile"
            >From Scrummaster of a single team to leading an engineering department of 5 Scrum
            teams, I have the experience to manage the processes that back up Agile. Focusing on
            quality, I work to empower the front line decision makers to do the right thing in a
            dynamic situation and ensure we deliver value. I then work to ensure that these
            decisions are backed across all business functions. I have worked with C-grade
            executives, sales and marketing teams and with professional services teams to help them
            understand how to be more Agile and how to get the most from working with an Agile
            engine room.
          </CVListItem>
          <CVListItem title="Coaching">
            Line management can all too easily become a transactional interaction of setting tasks
            and approving leave; I coach my direct reports and others to facilitate better
            engagement and empowerment ultimately driving productivity and personal effectiveness. I
            use active listening methods to pursue an agenda of autonomy, mastery and purpose for
            those that I am coaching and seek to balance directive instruction with collaboration.
          </CVListItem>
        </CVSkill>
      </CvItem>
      <CvItem icon="person_celebrate" icon_colour="saddlebrown" level="two" title="Hard Skills">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a pellentesque risus. Mauris
          quis turpis arcu. Proin orci mi, varius a nibh vitae, vestibulum maximus mi. Aliquam erat
          volutpat. Fusce consectetur volutpat leo, ac convallis lorem. Fusce id malesuada lorem,
          sit amet feugiat neque. Vivamus mattis mauris magna, in cursus nibh pellentesque ac. Orci
          varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras
          interdum lorem et diam iaculis hendrerit at non nisi. Nulla a consequat ipsum. Ut et sem
          vel nisi sagittis euismod ut et urna. Fusce non urna nec odio euismod maximus ut at felis.
        </p>
        <p>
          Nulla dolor ligula, cursus at eros non, varius pharetra ante. Aenean dapibus dolor sed ex
          porttitor, non consectetur nunc aliquet. Vestibulum ante ipsum primis in faucibus orci
          luctus et ultrices posuere cubilia curae; Sed at augue maximus, vestibulum arcu ut,
          tincidunt nisl. Nullam rutrum quam urna, nec bibendum lacus tempor ut. Fusce vitae
          facilisis ipsum. Duis ac commodo eros. Donec vel augue et purus scelerisque sagittis a nec
          sem. Quisque erat libero, varius malesuada hendrerit vel, auctor tempor quam.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam gravida nunc eget sapien
          bibendum, at aliquet ipsum aliquam. Proin at dui et nisi scelerisque condimentum. Nam
          consequat at libero quis posuere. Vestibulum vitae tortor nec leo cursus ullamcorper vitae
          vel tellus. Nullam nec odio imperdiet, elementum magna sed, imperdiet nibh. Sed egestas
          urna quis consectetur volutpat. Aliquam lectus enim, consectetur et odio eget, porta
          dictum neque. Aenean quis auctor dolor. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit.
        </p>
        <p>
          Suspendisse non suscipit quam. Proin vitae tellus iaculis, scelerisque ante at, cursus
          lacus. Praesent in ante ipsum. Fusce vitae dictum arcu. Nunc ac libero elit. Donec viverra
          ligula eu tortor convallis pretium. Sed vehicula quam non nibh aliquet elementum. Nullam
          id nisi sed lacus vehicula cursus sit amet non mauris. Nullam gravida ipsum ac sem rhoncus
          posuere sit amet sed nisi. Ut tempus, tellus sit amet auctor bibendum, nisi felis
          malesuada lorem, vel finibus quam augue nec tellus. Vivamus tempor, mi consectetur auctor
          consectetur, leo metus consectetur nisi, nec tincidunt nibh tellus in nisl. Nunc ut diam
          nec sem finibus lacinia. Aliquam eleifend erat in eros dictum pharetra quis ut libero. In
          maximus nunc id urna semper consequat quis at orci.
        </p>
        <p>
          Praesent odio ipsum, sagittis sed imperdiet sed, vestibulum vel sapien. Suspendisse
          interdum, metus vitae fermentum fermentum, nisi lacus tempor sapien, lobortis cursus sem
          quam sit amet nibh. Donec tincidunt mi eget risus viverra ultricies. Aenean neque libero,
          consequat id tempus vitae, faucibus eget ante. Nam nibh ex, pulvinar in bibendum ac,
          ullamcorper quis lectus. Suspendisse nunc risus, finibus non orci et, pellentesque
          fringilla ligula. Integer orci elit, mollis id neque et, vestibulum volutpat ipsum. In ut
          tortor rutrum est sollicitudin fermentum. Praesent fringilla, ipsum aliquam sollicitudin
          dictum, nisl erat lobortis tellus, non imperdiet nibh lorem eget mauris. In purus nulla,
          viverra in mi sollicitudin, finibus vulputate ligula. Class aptent taciti sociosqu ad
          litora torquent per conubia nostra, per inceptos himenaeos. Proin vitae quam ac nibh
          semper iaculis.
        </p>
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
    <CvItem icon="file_save" icon_colour="crimson" title="PDF Download"></CvItem>
  </main>
</template>

<style scoped>
main {
  border-left: var(--color-border) solid 1px;
  border-right: var(--color-border) solid 1px;
  border-bottom: var(--color-border) solid 1px;
  background-color: var(--color-background);
}

p {
  &:not(:last-child) {
    margin-bottom: 15px;
  }
}
</style>
