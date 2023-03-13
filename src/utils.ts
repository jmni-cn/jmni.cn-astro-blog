
// import device from "current-device";

// const deviceName = `${device.os}-${device.type}`;
export default function bdtj(action, value?) {
  if (window._hmt) {
    window._hmt.push(["_trackEvent", `blog.jmni-${action}`, "click", value]);
  }
}
