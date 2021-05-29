<script lang="ts">
  import { sketch } from "$lib/stores/sketch";
  import moonIcon from "./moon.svg";
</script>

<label class="switch">
  <input type="checkbox" on:click={sketch.toogleTheme}>
  <div class="slide round">
    <img src={moonIcon} alt="Moon" />
  </div>
</label>

<style>
.switch {
  position: relative;
  display: inline-block;
  width: 70px;
  height: 34px;
  margin-right: 4px;
}
.switch input {
  display:none;
}
.slide {
  display: flex;
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #dddddd;
  -webkit-transition: .4s;
  transition: .4s;
  padding: 8px;
}
.slide:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 38px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}
input:checked + .slide {
  background-color: black;
  padding-left: 40px;
}
input:checked + .slide:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
  left: -20px;
}
.slide.round {
  border-radius: 34px;
}
.slide.round:before {
  border-radius: 50%;
}
</style>