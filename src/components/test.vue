<template>
  <div class="team-introduction">
    <div class="circles">
      <div
        v-for="(member, index) in teamMembers"
        :key="index"
        :class="['circle', { selected: selectedMemberIndex === index }]"
        @click="selectMember(index)"
      ></div>
    </div>
    <div class="member-info" v-if="selectedMember">
      <img :src="selectedMember.avatar" alt="Member Avatar" class="avatar" />
      <p class="description">{{ selectedMember.description }}</p>
    </div>
  </div>
</template>

<script>
import avatar1 from '../assets/people/hjh.jpg';
import avatar2 from '../assets/people/zwj.jpg';
import avatar3 from '../assets/people/hh.png';
import avatar4 from '../assets/people/jty.jpg';
import avatar5 from '../assets/people/sbq.png';
import avatar6 from '../assets/people/zjx.jpg';

export default {
  data() {
    return {
      selectedMemberIndex: 0,
      teamMembers: [
        {
          avatar: avatar1,
          description: 'This is member 1',
        },
        {
          avatar: avatar2,
          description: 'This is member 2',
        },
        {
          avatar: avatar3,
          description: 'This is member 3',
        },
        {
          avatar: avatar4,
          description: 'This is member 4',
        },
        {
          avatar: avatar5,
          description: 'This is member 5',
        },
        {
          avatar: avatar6,
          description: 'This is member 6',
        },
      ],
    };
  },
  computed: {
    selectedMember() {
      return this.teamMembers[this.selectedMemberIndex];
    },
  },
  methods: {
    selectMember(index) {
      this.selectedMemberIndex = index;
    },
  },
};
</script>

<style scoped>
.team-introduction {
  text-align: center;
}

.circles {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.circle {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: lightblue;
  margin: 0 5px;
  cursor: pointer;
}

.circle.selected {
  background-color: darkblue;
}

.member-info {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 10px;
}

.description {
  max-width: 300px;
  font-size: 16px;
  color: #333;
}
</style>
