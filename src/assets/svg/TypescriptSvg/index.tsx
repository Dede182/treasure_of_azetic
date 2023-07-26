import styles from './styles.module.scss';
import ten from '../../images/symbols/dia.png'

interface SymbolSvgProps {
  animate?: boolean;
}
const TypescriptSvg: React.FC<SymbolSvgProps> = ({ animate }) => {
  return (
    <img src={ten} className={animate ? styles.icon : ''} width="50px" height="50" alt="" />

    // <svg
    //   aria-hidden={true}
    //   viewBox="0 0 303 241"
    //   width="50"
    //   height="50"
    //   xmlns="http://www.w3.org/2000/svg"
    //   className={animate ? styles.icon : ''}
    // >
    //   <path
    //     d="M232.614 20.4767C241.127 22.4571 248.862 26.9146 254.844 33.2867C258.139 36.7353 261.001 40.5738 263.364 44.7167C263.474 45.1667 248.024 55.5467 238.654 61.3367C238.314 61.5667 236.964 60.0967 235.434 57.8367C233.723 54.8944 231.293 52.434 228.373 50.6852C225.452 48.9365 222.136 47.9565 218.734 47.8367C207.964 47.0967 201.024 52.7367 201.074 62.1667C200.981 64.4834 201.51 66.7829 202.604 68.8267C204.974 73.7267 209.374 76.6667 223.194 82.6567C248.634 93.6067 259.554 100.827 266.294 111.087C270.104 117.569 272.45 124.807 273.169 132.291C273.888 139.776 272.961 147.328 270.454 154.417C267.009 162.191 261.546 168.902 254.632 173.852C247.717 178.802 239.604 181.811 231.134 182.567C222.131 183.599 213.034 183.505 204.054 182.287C190.299 180.027 177.628 173.425 167.894 163.447C164.216 159.305 161.103 154.695 158.634 149.737C159.672 148.965 160.765 148.269 161.904 147.657C163.484 146.757 169.464 143.317 175.104 140.047L185.344 134.047L187.484 137.167C191.089 142.321 195.677 146.712 200.984 150.087C206.345 153.027 212.416 154.42 218.522 154.111C224.628 153.802 230.528 151.803 235.564 148.337C238.162 145.805 239.786 142.439 240.152 138.83C240.517 135.221 239.601 131.598 237.564 128.597C234.804 124.647 229.164 121.327 213.134 114.377C200.565 110.138 189.116 103.113 179.644 93.8267C175.134 88.6864 171.802 82.6212 169.884 76.0567C168.466 68.5785 168.257 60.9212 169.264 53.3767C171.146 44.6951 175.651 36.8019 182.17 30.7667C188.688 24.7314 196.904 20.8459 205.704 19.6367C214.666 18.5659 223.737 18.8491 232.614 20.4767ZM149.184 35.3067L149.294 49.8467H102.994V181.327H70.3443V49.8767H24.0443V35.5967C23.9212 30.7064 24.0547 25.813 24.4443 20.9367C24.6143 20.7067 52.7643 20.5967 86.8943 20.6567L149.004 20.8267L149.184 35.3067Z"
    //     fill="#007ACC"
    //   />
    //   <path
    //     d="M54.2373 3.4202L53.9837 10.6812L60.811 13.1661L53.827 15.1687L53.5734 22.4297L49.5107 16.4064L42.5267 18.4091L46.9997 12.6838L42.9369 6.66051L49.7642 9.14543L54.2373 3.4202Z"
    //     fill="#C77B32"
    //   />
    //   <path
    //     d="M124.323 72.5226L125.182 78.6382L131.264 79.7105L125.714 82.4177L126.573 88.5333L122.283 84.0909L116.733 86.7981L119.632 81.3454L115.342 76.903L121.424 77.9754L124.323 72.5226Z"
    //     fill="#C77B32"
    //   />
    //   <path
    //     d="M256.397 95.4668L260.87 101.192L267.697 98.7071L263.634 104.73L268.108 110.456L261.124 108.453L257.061 114.476L256.807 107.215L249.823 105.213L256.65 102.728L256.397 95.4668Z"
    //     fill="#C77B32"
    //   />
    //   <path
    //     d="M159.317 97.8638L161.001 103.046H166.45L162.041 106.249L163.725 111.431L159.317 108.229L154.909 111.431L156.592 106.249L152.184 103.046H157.633L159.317 97.8638Z"
    //     fill="#C77B32"
    //   />
    //   <path
    //     d="M119.397 138.467L123.87 144.192L130.697 141.707L126.634 147.73L131.108 153.456L124.124 151.453L120.061 157.476L119.807 150.215L112.823 148.213L119.65 145.728L119.397 138.467Z"
    //     fill="#C77B32"
    //   />
    //   <path
    //     d="M178.698 165.177L180.935 168.039L184.349 166.797L182.317 169.809L184.554 172.671L181.062 171.67L179.03 174.682L178.904 171.051L175.412 170.05L178.825 168.807L178.698 165.177Z"
    //     fill="#C77B32"
    //   />
    //   <path
    //     d="M163.698 20.7567L165.935 23.6193L169.349 22.3769L167.317 25.3885L169.554 28.2511L166.062 27.2498L164.03 30.2615L163.904 26.631L160.412 25.6297L163.825 24.3872L163.698 20.7567Z"
    //     fill="#C77B32"
    //   />
    //   <path
    //     d="M245.698 69.7567L247.935 72.6193L251.349 71.3769L249.317 74.3885L251.554 77.2511L248.062 76.2498L246.03 79.2615L245.904 75.631L242.412 74.6297L245.825 73.3872L245.698 69.7567Z"
    //     fill="#C77B32"
    //   />
    //   <path
    //     d="M50.9906 93.3024L51.7489 98.6984L57.1152 99.6446L52.2176 102.033L52.976 107.429L49.1907 103.51L44.2931 105.898L46.8513 101.087L43.0661 97.1674L48.4324 98.1136L50.9906 93.3024Z"
    //     fill="#C77B32"
    //   />
    //   <path
    //     d="M50.9906 93.3024L51.7489 98.6984L57.1152 99.6446L52.2176 102.033L52.976 107.429L49.1907 103.51L44.2931 105.898L46.8513 101.087L43.0661 97.1674L48.4324 98.1136L50.9906 93.3024Z"
    //     fill="#C77B32"
    //   />
    //   <path
    //     d="M31.3301 141.547L34.0298 143.977L37.1758 142.161L35.6982 145.48L38.3979 147.91L34.785 147.531L33.3075 150.849L32.5522 147.296L28.9394 146.916L32.0854 145.1L31.3301 141.547Z"
    //     fill="#C77B32"
    //   />
    //   <path
    //     d="M70.9906 159.349L71.7489 164.745L77.1152 165.691L72.2176 168.08L72.976 173.476L69.1907 169.556L64.2931 171.945L66.8513 167.134L63.0661 163.214L68.4324 164.16L70.9906 159.349Z"
    //     fill="#C77B32"
    //   />
    //   <path
    //     d="M38.3969 55.4201L42.87 61.1454L49.6972 58.6604L45.6345 64.6838L50.1075 70.409L43.1235 68.4064L39.0608 74.4297L38.8072 67.1687L31.8232 65.1661L38.6505 62.6811L38.3969 55.4201Z"
    //     fill="#C77B32"
    //   />
    //   <path
    //     d="M30.6451 226L17.9462 182.364H29.601L36.1848 210.957H36.5471L44.0684 182.364H53.5712L61.0925 211.021H61.4547L68.0598 182.364H79.6934L67.0158 226H56.8525L48.9902 199.537H48.6493L40.7871 226H30.6451ZM84.0506 226V193.273H94.4696V226H84.0506ZM89.2708 189.459C87.8077 189.459 86.5506 188.976 85.4995 188.01C84.4483 187.03 83.9228 185.851 83.9228 184.473C83.9228 183.109 84.4483 181.945 85.4995 180.979C86.5506 179.999 87.8077 179.509 89.2708 179.509C90.748 179.509 92.0051 179.999 93.0421 180.979C94.0932 181.945 94.6188 183.109 94.6188 184.473C94.6188 185.851 94.0932 187.03 93.0421 188.01C92.0051 188.976 90.748 189.459 89.2708 189.459ZM111.52 182.364V226H101.101V182.364H111.52ZM130.105 226.469C127.691 226.469 125.496 225.844 123.521 224.594C121.547 223.344 119.97 221.469 118.791 218.969C117.612 216.469 117.023 213.365 117.023 209.658C117.023 205.808 117.634 202.641 118.855 200.155C120.077 197.669 121.675 195.83 123.649 194.636C125.638 193.443 127.776 192.847 130.063 192.847C131.781 192.847 133.252 193.145 134.473 193.741C135.695 194.324 136.703 195.077 137.499 196C138.294 196.923 138.898 197.882 139.31 198.876H139.523V182.364H149.942V226H139.629V220.695H139.31C138.869 221.703 138.244 222.648 137.435 223.528C136.625 224.409 135.61 225.119 134.388 225.659C133.181 226.199 131.753 226.469 130.105 226.469ZM133.727 218.351C134.992 218.351 136.071 217.996 136.966 217.286C137.861 216.561 138.55 215.545 139.033 214.239C139.516 212.932 139.757 211.398 139.757 209.636C139.757 207.847 139.516 206.305 139.033 205.013C138.564 203.72 137.875 202.726 136.966 202.03C136.071 201.334 134.992 200.986 133.727 200.986C132.435 200.986 131.341 201.341 130.446 202.051C129.551 202.761 128.869 203.763 128.401 205.055C127.946 206.348 127.719 207.875 127.719 209.636C127.719 211.398 127.953 212.932 128.422 214.239C128.891 215.545 129.566 216.561 130.446 217.286C131.341 217.996 132.435 218.351 133.727 218.351ZM171.808 226.618C168.356 226.618 165.395 225.908 162.923 224.487C160.466 223.067 158.577 221.092 157.256 218.564C155.934 216.021 155.274 213.081 155.274 209.743C155.274 206.391 155.934 203.45 157.256 200.922C158.591 198.379 160.487 196.398 162.944 194.977C165.416 193.557 168.363 192.847 171.787 192.847C174.812 192.847 177.447 193.393 179.692 194.487C181.95 195.581 183.711 197.129 184.976 199.132C186.254 201.121 186.929 203.457 187 206.142H177.263C177.064 204.466 176.496 203.152 175.558 202.2C174.635 201.249 173.427 200.773 171.936 200.773C170.729 200.773 169.67 201.114 168.761 201.795C167.852 202.463 167.142 203.457 166.631 204.778C166.133 206.085 165.885 207.705 165.885 209.636C165.885 211.568 166.133 213.202 166.631 214.537C167.142 215.858 167.852 216.859 168.761 217.541C169.67 218.209 170.729 218.543 171.936 218.543C172.902 218.543 173.754 218.337 174.493 217.925C175.246 217.513 175.863 216.909 176.346 216.114C176.829 215.304 177.135 214.324 177.263 213.173H187C186.9 215.872 186.226 218.23 184.976 220.247C183.74 222.264 182 223.834 179.756 224.956C177.525 226.064 174.876 226.618 171.808 226.618ZM201.558 226.554C199.47 226.554 197.616 226.206 195.997 225.51C194.392 224.8 193.12 223.734 192.183 222.314C191.259 220.879 190.798 219.082 190.798 216.923C190.798 215.105 191.117 213.571 191.757 212.321C192.396 211.071 193.276 210.055 194.399 209.274C195.521 208.493 196.813 207.903 198.276 207.506C199.74 207.094 201.302 206.817 202.964 206.675C204.825 206.504 206.323 206.327 207.46 206.142C208.596 205.943 209.42 205.666 209.931 205.311C210.457 204.942 210.72 204.423 210.72 203.756V203.649C210.72 202.555 210.343 201.71 209.59 201.114C208.838 200.517 207.822 200.219 206.544 200.219C205.166 200.219 204.058 200.517 203.22 201.114C202.382 201.71 201.849 202.534 201.622 203.585L192.012 203.244C192.296 201.256 193.028 199.48 194.207 197.918C195.4 196.341 197.034 195.105 199.107 194.21C201.195 193.301 203.703 192.847 206.629 192.847C208.717 192.847 210.642 193.095 212.403 193.592C214.164 194.075 215.698 194.786 217.005 195.723C218.312 196.646 219.32 197.783 220.031 199.132C220.755 200.482 221.117 202.023 221.117 203.756V226H211.316V221.44H211.061C210.478 222.548 209.732 223.486 208.823 224.253C207.928 225.02 206.87 225.595 205.649 225.979C204.441 226.362 203.078 226.554 201.558 226.554ZM204.775 219.736C205.897 219.736 206.906 219.509 207.801 219.054C208.71 218.599 209.434 217.974 209.974 217.179C210.514 216.369 210.784 215.432 210.784 214.366V211.256C210.485 211.412 210.123 211.554 209.697 211.682C209.285 211.81 208.83 211.93 208.333 212.044C207.836 212.158 207.325 212.257 206.799 212.342C206.274 212.428 205.769 212.506 205.286 212.577C204.306 212.733 203.468 212.974 202.772 213.301C202.09 213.628 201.565 214.054 201.195 214.58C200.84 215.091 200.663 215.702 200.663 216.412C200.663 217.491 201.046 218.315 201.813 218.884C202.595 219.452 203.582 219.736 204.775 219.736ZM227.488 226V193.273H237.609V199.239H237.95C238.546 197.08 239.519 195.474 240.869 194.423C242.218 193.358 243.788 192.825 245.578 192.825C246.061 192.825 246.558 192.861 247.069 192.932C247.58 192.989 248.056 193.081 248.497 193.209V202.264C247.999 202.094 247.346 201.959 246.536 201.859C245.741 201.76 245.031 201.71 244.406 201.71C243.17 201.71 242.055 201.987 241.061 202.541C240.08 203.081 239.306 203.841 238.738 204.821C238.184 205.787 237.907 206.923 237.907 208.23V226H227.488ZM262.996 226.469C260.581 226.469 258.387 225.844 256.412 224.594C254.438 223.344 252.861 221.469 251.682 218.969C250.503 216.469 249.914 213.365 249.914 209.658C249.914 205.808 250.524 202.641 251.746 200.155C252.968 197.669 254.566 195.83 256.54 194.636C258.529 193.443 260.666 192.847 262.953 192.847C264.672 192.847 266.142 193.145 267.364 193.741C268.585 194.324 269.594 195.077 270.389 196C271.185 196.923 271.789 197.882 272.2 198.876H272.414V182.364H282.833V226H272.52V220.695H272.2C271.76 221.703 271.135 222.648 270.325 223.528C269.516 224.409 268.5 225.119 267.279 225.659C266.071 226.199 264.644 226.469 262.996 226.469ZM266.618 218.351C267.882 218.351 268.962 217.996 269.857 217.286C270.752 216.561 271.441 215.545 271.923 214.239C272.406 212.932 272.648 211.398 272.648 209.636C272.648 207.847 272.406 206.305 271.923 205.013C271.455 203.72 270.766 202.726 269.857 202.03C268.962 201.334 267.882 200.986 266.618 200.986C265.325 200.986 264.232 201.341 263.337 202.051C262.442 202.761 261.76 203.763 261.291 205.055C260.837 206.348 260.61 207.875 260.61 209.636C260.61 211.398 260.844 212.932 261.313 214.239C261.781 215.545 262.456 216.561 263.337 217.286C264.232 217.996 265.325 218.351 266.618 218.351Z"
    //     fill="#C77B32"
    //   />
    // </svg>
  );
};

export { TypescriptSvg };
