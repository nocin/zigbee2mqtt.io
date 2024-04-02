"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[13797],{366819:(e,t,i)=>{i.r(t),i.d(t,{data:()=>o});const o=JSON.parse('{"key":"v-7f8d3484","path":"/devices/929003017102.html","title":"Philips 929003017102 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Philips 929003017102 control via MQTT","description":"Integrate your Philips 929003017102 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2021-03-30T20:29:35.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]},{"level":3,"title":"Directly control Zigbee groups","slug":"directly-control-zigbee-groups","link":"#directly-control-zigbee-groups","children":[]}]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]},{"level":3,"title":"Device mode (enum)","slug":"device-mode-enum","link":"#device-mode-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1712081664000},"filePathRelative":"devices/929003017102.md"}')},619162:(e,t,i)=>{i.r(t),i.d(t,{default:()=>g});var o=i(166252);const n=(0,o._)("h1",{id:"philips-929003017102",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#philips-929003017102","aria-hidden":"true"},"#"),(0,o.Uk)(" Philips 929003017102")],-1),d=(0,o._)("thead",null,[(0,o._)("tr",null,[(0,o._)("th"),(0,o._)("th")])],-1),l=(0,o._)("tr",null,[(0,o._)("td",null,"Model"),(0,o._)("td",null,"929003017102")],-1),s=(0,o._)("td",null,"Vendor",-1),a=(0,o._)("tr",null,[(0,o._)("td",null,"Description"),(0,o._)("td",null,"Hue wall switch module")],-1),r=(0,o._)("tr",null,[(0,o._)("td",null,"Exposes"),(0,o._)("td",null,"battery, action, device_mode, linkquality")],-1),c=(0,o._)("tr",null,[(0,o._)("td",null,"Picture"),(0,o._)("td",null,[(0,o._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/929003017102.png",alt:"Philips 929003017102"})])],-1),h=(0,o.uE)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>Press the reset button for ten seconds to reset the device - the red LED flashes one time confirming the reset. Then short the pins of input one.<br> The red LED begins to flash every two seconds indicating pairing mode. Out of the box, the device enters pairing mode, as soon as the pins of input 1 are shortened - the red LED starts to flash. If the device has not been paired yet, it can also be put into pairing mode by short pressing the reset button.</p><h3 id="directly-control-zigbee-groups" tabindex="-1"><a class="header-anchor" href="#directly-control-zigbee-groups" aria-hidden="true">#</a> Directly control Zigbee groups</h3><p>It&#39;s possible to configure this switch to directly control Zigbee groups. In this way, the switch can control e.g. a group of light bulbs even when Zigbee2MQTT is not running, and it can also make controlling the lights feel a bit more responsive. This switch can also act as a dimmer: for each successive long press of the switch, it will alternate between increasing and decreasing brightness. To set this all up, follow these steps in the Zigbee2MQTT frontend:</p><ol><li>Go to the <em>Groups</em> tab and create a new group if it does not already exist. Add devices to the groups that you want to be controlled by this switch.</li><li>Add this Hue Wall Switch Module to the group. Note that this device might not show up in the group, but this step is important.</li><li>Click on this device and go to the <em>Bind</em> tab. Modify the checkboxes so that only <code>manuSpecificPhilips</code>, <code>OnOff</code>, and <code>LevelCtrl</code> (optional ¹) are checked, and click <em>Unbind</em> in the row where the destination is <code>Coordinator</code>.</li><li>In the blank row at the bottom select endpoint 1 as the source endpoint, the group as the destination, tick <code>OnOff</code> and <code>LevelCtrl</code> (optional ¹), and click bind.</li></ol><p>Notes:</p><ul><li>¹ If you don&#39;t want to use the brightness control capabilities of the switch, ignore <code>LevelCtrl</code> in the steps.</li><li>The device needs to be awake to respond to changes, so you will need to trigger the switch to wake it up before assigning it to the group or changing the bindings.</li><li>This device does not support direct binding (to a device instead of a group).</li><li>After doing this, the power events are still sent and can hence be used for automation.</li><li>Pressing the yellow reconfigure button in the <em>About</em> tab will reset the bindings of the coordinator, but it will not unbind any groups - they have to be unbound explicitly.</li><li>Actions are only sent for input 1 of the device. For input 2 no actions will be sent (so a double rocker is <strong>not</strong> supported).</li></ul>',8),u=(0,o.uE)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum" aria-hidden="true">#</a> Action (enum)</h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>left_press</code>, <code>left_press_release</code>, <code>right_press</code>, <code>right_press_release</code>, <code>left_hold</code>, <code>left_hold_release</code>, <code>right_hold</code>, <code>right_hold_release</code>, <code>toggle</code>.</p><h3 id="device-mode-enum" tabindex="-1"><a class="header-anchor" href="#device-mode-enum" aria-hidden="true">#</a> Device mode (enum)</h3><p>Value can be found in the published state on the <code>device_mode</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;device_mode&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;device_mode&quot;: NEW_VALUE}</code>. The possible values are: <code>single_rocker</code>, <code>single_push_button</code>, <code>dual_rocker</code>, <code>dual_push_button</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',9),p={},g=(0,i(983744).Z)(p,[["render",function(e,t){const i=(0,o.up)("RouterLink");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.kq)(" !!!! "),(0,o.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,o.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,o.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,o.kq)(" !!!! "),n,(0,o._)("table",null,[d,(0,o._)("tbody",null,[l,(0,o._)("tr",null,[s,(0,o._)("td",null,[(0,o.Wm)(i,{to:"/supported-devices/#v=Philips"},{default:(0,o.w5)((()=>[(0,o.Uk)("Philips")])),_:1})])]),a,r,c])]),(0,o.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),h,(0,o.kq)(" Notes END: Do not edit below this line "),u])}]])}}]);