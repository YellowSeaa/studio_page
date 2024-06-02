<template>
    <div class="piece">
        <div class="top_part">
            <div class="top_text1">团队成员介绍</div>
            <div class="top_2text2">试卷簿团队是一个致力于“智能高效，落实实际”的创业团队。</div>
        </div>
        <div class="bottom_part">
            <!-- <div class="bottom_1">
                <img src="../assets/piece4.png" alt="">
            </div> -->
            <!-- <div class="bottom_2"> -->
            <!-- <div class="bottom_text1">Matthew Paul</div>
                <div class="bottom_text2">Perfect, very good job! Thank you for the amazing design and work. Really
                    impressed with the high quality and quick turnaround time. Highly recommend.</div>
                <div class="select">
                    <div class="option" style="background: #2639ED;"></div>
                    <div class="option"></div>
                    <div class="option"></div>
                    <div class="option"></div>
                    <div class="option"></div>
                    <div class="option"></div>
                </div> -->
            <!-- <div class="team-introduction"> -->
            <div class="member-info" v-if="selectedMember">
                <img :src="selectedMember.avatar" alt="Member Avatar" class="bottom_1" />
                <div class="bottom_2">
                    <p class="bottom_text1">{{ selectedMember.name }}</p>
                    <p class="bottom_text2">{{ selectedMember.description }}</p>
                    <div class="select">
                        <div v-for="(member, index) in teamMembers" :key="index"
                            :class="['option', { selected: selectedMemberIndex === index }]"
                            @click="selectMember(index)">
                        </div>
                    </div>
                </div>
            </div>

            <!-- </div> -->
            <!-- </div> -->
            <div class="bottom_3">
                <img src="../assets/people/hjh.jpg" alt="" class="img120">
                <img src="../assets/people/zwj.jpg" alt="" class="img98" style="left: 0px;top: 58px;">
                <img src="../assets/people/hh.png" alt="" class="img98" style="left: 98px;top: 257px;">
                <img src="../assets/people/jty.jpg" alt="" class="img68" style="left: 0px;top: 203px;">
                <img src="../assets/people/sbq.png" alt="" class="img68" style="left: 240px;top: 227px;">
                <img src="../assets/people/zjx.jpg" alt="" class="img54">
            </div>
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
                    name: '黄俊豪',
                    description: '广州大学计算机科学与网络工程学院计算机科学与技术专业在读本科生，主修程序设计基础、数据结构、操作系统等重要专业课程，绩点专业前10。“试卷簿——专注高效的学习帮手”项目团队负责人。计科221班学习委员，计算机科学与网络工程学院22级创新班班长。曾获得广州大学一等奖学金以及“优秀学生”、“创新班优秀负责人”等称号。在学科竞赛方面，曾获得“挑战杯”——黑科技竞赛全国一等奖，中国高校计算机大赛全国三等奖，2023年全国大学生数学建模大赛广东省二等奖。科研方面，对计算机视觉、生成对抗网络和模型压缩等领域具有一定的了解，积累了较多项目与团队合作经验。',
                },
                {
                    avatar: avatar2,
                    name: '张王俊',
                    description: '广州大学计算机科学与网络工程学院计算机科学与技术专业在读本科生。“试卷簿——专注高效的学习帮手”项目团队主要开发者之一。计算机拔尖创新实验班成员、计科223学委。曾获得广州大学校一等奖学金，2022-2023年度广州大学优秀学生、优秀班干部、计算机拔尖创新实验班优秀成员等称号。学科竞赛方面，曾获第十四届、十五届蓝桥杯全国软件和信息技术专业人才大赛广东赛区C/C++程序设计大学B组二等奖等奖项；创新竞赛方面，申报的挑战杯项目立项，参与大创省级立项项目，作为负责人参与的国家级项目在申。',
                },
                {
                    avatar: avatar3,
                    name: '黄海',
                    description: '广州大学计算机科学与网络工程学院人工智能专业在读本科生。“试卷簿——专注高效的学习帮手”项目产品经理。计算机拔尖创新实验班组长、智能232导生。曾获得广州大学校三等奖学金、计算机拔尖创新实验班优秀组长、计算机拔尖创新实验班优秀团队负责人等称号。学科竞赛方面，曾获2022年计算机设计大赛省三等奖，2024年计算机设计大赛校一等奖；创新竞赛方面，参与大创省级立项项目，挑战杯校级立项并结项；科研方面，在人工智能安全、隐私保护等领域学术会议上发表多篇学术论文。积累了较多项目与团队合作的经验。',
                },
                {
                    avatar: avatar4,
                    name: '江天阳',
                    description: '广州大学计算机科学与网络工程学院网络工程专业在读本科生，主修程序设计基础、面向对象程序设计、高等数学、线性代数、离散数学、计算机网络等课程。学科竞赛方面，曾获2024年中国大学生计算机设计大赛校级一等奖。具有一定项目与团队合作的经验。',
                },
                {
                    avatar: avatar5,
                    name: '舒保庆',
                    description: '广州大学计算机科学与网络工程学院计算机科学与技术专业在读大一本科生，主修程序设计基础、面向对象程序设计、高等数学、线性代数、离散数学、计算机网络、数据结构、操作系统、数据库原理等课程，绩点专业前20%。担任计科233班文娱组织委员，计算机科学与网络工程学院学生会文体中心工作人员，广州大学书画协会信息部干事。志愿服务方面，曾获得罗定市红十字会优秀志愿者。学科竞赛方面，曾获2024年中国大学生计算机设计大赛校级一等奖，2023年广州大学第十九届网页设计大赛一等奖。具备良好的团队合作和沟通能力，积累了一些项目与团队合作的经验。',
                },
                {
                    avatar: avatar6,
                    name: '植俊烜',
                    description: '河南科技大学信息工程学院机器人工程专业本科生，主修数字电路，模拟电路，自动控制原理，嵌入式系统等课程。机器人创新实验室成员，参与了各种嵌入式的实践活动，在声音定位原理和算法上进行了深入学习并发表了省级期刊。',
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
.piece {
    /* background-color: aqua; */
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 597px;
    margin-top: 117px;
    margin-left: 107px;
    margin-right: 69px;
}

.top_part {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.top_text1 {
    font-family: AvertaDemoPECuttedDemo;
    font-size: 40px;
    font-weight: normal;
    line-height: 56px;
    text-align: center;
    letter-spacing: 0px;

    color: #000000;
}

.top_text2 {
    margin-top: 17px;
    font-family: AvertaDemoPECuttedDemo;
    font-size: 18px;
    font-weight: normal;
    line-height: 28.8px;
    text-align: center;
    letter-spacing: 0px;

    color: #757575;
}

.bottom_part {
    margin-top: 80px;
    display: flex;
    justify-content: space-between;
    height: 389px;
    /* align-items: center; */
    width: 100%;
}

.bottom_1 {
    box-shadow: 10px 20px 50px 0px rgba(0, 0, 0, 0.15);
    border-radius: 500px 0px 500px 500px;
    width: 389px;
    height: 389px;
}

.bottom_1 img {
    width: 100%;
    height: 100%;
    box-shadow: 10px 20px 50px 0px rgba(0, 0, 0, 0.15);
    border-radius: 500px 0px 500px 500px;
}

.bottom_2 {
    display: flex;
    flex-direction: column;
    margin-left: 67px;
    /* margin-top: 84px; */
    width: 412px;
    max-width: 600px;
    margin-top: auto;
}

.bottom_text1 {
    font-family: AvertaDemoPECuttedDemo;
    font-size: 24px;
    font-weight: normal;
    line-height: 34px;
    text-align: left;
    letter-spacing: 0px;

    color: #000000;
}

.bottom_text2 {
    font-family: AvertaDemoPECuttedDemo;
    font-size: 16px;
    font-weight: normal;
    line-height: 25.6px;
    letter-spacing: 0px;
    margin-top: 21px;
    color: #565656;
}

.bottom_3 {
    position: relative;
    width: 348px;
    height: 355px;
    margin-left: 38px;
}

.img120 {
    border-radius: 500px 500px 500px 500px;
    position: absolute;
    left: 124px;
    top: 107px;
    width: 120px;
    height: 120px;
    opacity: 1;
}

.img98 {
    border-radius: 500px 500px 500px 500px;
    position: absolute;
    width: 98px;
    height: 98px;
    opacity: 1;
}

.img68 {
    border-radius: 500px 500px 500px 500px;
    position: absolute;
    width: 68px;
    height: 68px;
    opacity: 1;

}

.img54 {
    border-radius: 500px 500px 500px 500px;
    position: absolute;
    left: 200px;
    top: 30px;
    width: 54px;
    height: 54px;
    opacity: 1;
}

.select {
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
    width: 180px;

    /* margin-bottom: 200px; */
}

.option {
    border-radius: 500px 500px 500px 500px;
    width: 16px;
    height: 16px;
    background: #E7F0FC;
    cursor: pointer;
}

.option.selected {
    background-color: #2639ED;
}

.member-info {
    display: flex;
}
</style>