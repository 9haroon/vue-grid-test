<template>
  <div
    class="cardLayout"
    :class="$store.getters.getStatus ? 'cardLayout-false' : ' cardLayout-true'"
  >
    <div class="Layout">
      <div class="Device">
        <i class="fas fa-tv"></i>
        <i class="fas fa-mobile-alt"></i>
      </div>
      <div class="isDone" v-if="$store.getters.getStatus == false">
        <div class="status">
          <p>Done</p>
        </div>
      </div>
      <div class="Card">
        <b-card
          title="Introduce Myself"
          img-src="https://scontent.fbkk2-5.fna.fbcdn.net/v/t1.6435-9/164630921_791220138159191_5505045887423528070_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeGPKKjEG0AXaXstt2sWrsA3S0_7kCPGsZtLT_uQI8axmxHM3Kv279wWf2xOm3LErY5H-5JhEro9SEuWbWABwCFa&_nc_ohc=YMpU_WBgFrIAX_NdgLX&_nc_ht=scontent.fbkk2-5.fna&oh=8783e591b84ce8dc37f859cb3ab17426&oe=60983208"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 30rem"
          class="mb-2"
        >
          <b-card-text class="py-3">
            <p>
              สวัดดีครับ ผมนายกฤตพจน์ เลิศฤทธิ์เดชา
              ผมรักในการเขียนเว็บไซต์เเละชอบเรียนรู้ในสิ่งใหม่ ๆ ตลอดเวลา
            </p>
          </b-card-text>
          <template #footer>
            <div class="interactive">
              <div class="Btt">
                <b-button
                  variant="primary"
                  id="show-btn"
                  @click="$bvModal.show('bv-modal-show')"
                  >Show me</b-button
                >
              </div>
              <b-modal id="bv-modal-show" hide-footer>
                <template #modal-title> Show Profile </template>
                <div class="ContentMordal">
                  <div>
                    <strong>ชื่อ: </strong>
                    <p>นายกฤตพจน์ เลิศฤทธิ์เดชา</p>
                  </div>
                  <div>
                    <strong>ชื่อเล่น: </strong>
                    <p>ชื่อเล่นชื่อบอสครับ เเต่เพื่อน ๆ เรียกผมว่าจิ๋ว</p>
                  </div>
                  <div>
                    <strong>จบจาก: </strong>
                    <p>
                      มหาวิทยาลัยเทคโนโลยีราชมงคลธัญบุรี
                      คณะวิทยาศาสตร์เเละเทคโนโลยี สาขาเทคโนโลยีสารสนเทศ
                    </p>
                  </div>
                  <div>
                    <strong>จุดเเข็ง:</strong><br />
                    <p>- อยู่กับสิ่งชอบได้นาน ๆ โดยไม่ต้องพัก</p>
                    <br />
                    <p>- มีความอดทนต่อการเรียนรู้เเละทำงาน</p>
                    <br />
                    <p>- ชอบเรียนรู้สิ่งใหม่ ๆ เพื่อพัฒนาตัวเองให้เก่งขึ้น</p>
                    <br />
                    <p>- มุ่งมั่น / ทุ่มเท กับงานทีให้มา</p>
                  </div>
                  <div>
                    <strong>จุดอ่อน:</strong><br />
                    <p>- สมาธิสั้น</p>
                    <br />
                    <p>- เป็นคนเคร่งกับตัวเองเกินไป</p>
                    <br />
                    <p>- เป็นคนที่ไม่ค่อยละเอียด</p>
                    <br />
                    <p>- ชอบคิดมากจนเกินไป</p>
                  </div>
                  <div>
                    <strong>Flamework: </strong><br />
                    <p>- laravel</p>
                    <br />
                    <p>- vue.js</p>
                  </div>
                </div>
                <b-button
                  class="mt-3"
                  block
                  @click="$bvModal.hide('bv-modal-show')"
                  >Close</b-button
                >
              </b-modal>
              <div class="CheckisDone">
                <b-form-checkbox
                  id="checkbox-1"
                  name="checkbox-1"
                  @change="showAlert"
                >
                  <div v-if="$store.getters.getStatus === true">Is Done!</div>
                  <div v-else>Not Done!</div>
                </b-form-checkbox>
              </div>
            </div>
          </template>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
export default {
  methods: {
    showAlert() {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't Change the Status",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes",
      }).then((result) => {
        if (result.isConfirmed) {
          if (this.$store.getters.getStatus != false) {
            Swal.fire(
              "Change!",
              "The status will change to Is Done",
              "success"
            ).then(
              this.$store.dispatch(
                "changeStatus",
                this.$store.getters.getStatus
              )
            );
          } else {
            Swal.fire(
              "Change!",
              "The status will change to Not Done",
              "success"
            ).then(
              this.$store.dispatch(
                "changeStatus",
                this.$store.getters.getStatus
              )
            );
          }
        }
      });
    },
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Kanit", sans-serif;
}
.cardLayout {
  height: 600px;
  width: 100%;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  padding: 0 20px;
  position: relative;
}
.cardLayout-true {
  background-color: rosybrown;
}
.cardLayout-false {
  background-color: rgba(0, 0, 0, 0.5);
}
.cardLayout .Layout {
  margin: auto 0px;
  transition: 0.3s;
}
.cardLayout .Layout .Device {
  height: 30px;
  width: 60px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 300px;
  position: absolute;
  z-index: 1000;
  top: -15px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.cardLayout .Layout .Device .fa-mobile-alt {
  display: none;
}
.cardLayout .Layout .status {
  height: 30px;
  width: 60px;
  background-color: green;
  border-radius: 300px;
  position: absolute;
  z-index: 1000;
  top: -15px;
  left: 110px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  transition: 0.3s;
}
.cardLayout .Layout .status p {
  display: flex;
  align-items: center;
  justify-content: center;
}
.cardLayout .Layout .Device i {
  color: white;
  padding: 0 30px;
}
.cardLayout .Layout .Card {
  border-radius: 20px;
}
.cardLayout .Layout .Card img {
  height: 300px;
  width: 100%;
}
.cardLayout .Layout .Card .interactive {
  display: flex;
  justify-content: space-around;
}
.cardLayout .Layout .Card .interactive .CheckisDone {
  display: flex;
  align-items: center;
}
.ContentMordal p {
  display: inline-block;
}

@media only screen and (max-width: 768px) {
  .cardLayout .Layout .status {
    height: 30px;
    width: 60px;
    background-color: green;
    border-radius: 300px;
    position: absolute;
    z-index: 1000;
    top: -15px;
    left: 85px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    transition: 0.3s;
  }
}
@media only screen and (max-width: 577px) {
  .cardLayout .Layout .Device .fa-tv {
    display: none;
  }
  .cardLayout .Layout .Device .fa-mobile-alt {
    display: block;
  }
}
</style>
