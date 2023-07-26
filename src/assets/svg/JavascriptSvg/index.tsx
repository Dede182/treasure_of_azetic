import styles from './styles.module.scss';
import ten from '../../images/symbols/wild-bandito_l_10.png'

interface SymbolSvgProps {
  animate?: boolean;
}

const JavascriptSvg: React.FC<SymbolSvgProps> = ({ animate }) => {
  return (
    <img src={ten} className={animate ? styles.icon : ''} width="50px" height="50" alt="" />

    // <svg
    //   aria-hidden={true}
    //   viewBox="0 0 250 224"
    //   width="50"
    //   height="50"
    //   xmlns="http://www.w3.org/2000/svg"
    //   className={animate ? styles.icon : ''}
    // >
    //   <path
    //     d="M29.7468 209.668L13 5L213 5.41129L195.292 209.668L113.755 233.277L29.7468 209.668Z"
    //     fill="#E9CA32"
    //     className={styles['icon__js']}
    //   />
    //   <path
    //     d="M38.9906 83.9198L39.7489 89.3158L45.1152 90.2621L40.2176 92.6508L40.976 98.0468L37.1907 94.1271L32.2931 96.5158L34.8513 91.7045L31.0661 87.7848L36.4324 88.731L38.9906 83.9198Z"
    //     fill="#C77B32"
    //   />
    //   <path
    //     d="M192.397 128.42L196.87 134.145L203.697 131.66L199.634 137.684L204.108 143.409L197.124 141.406L193.061 147.43L192.807 140.169L185.823 138.166L192.65 135.681L192.397 128.42Z"
    //     fill="#C77B32"
    //   />
    //   <path
    //     d="M113.755 213.511V24.4919L196.116 24.7661L181.429 193.881L113.755 213.511Z"
    //     fill="#FFDE25"
    //     className={styles['icon__js']}
    //   />
    //   <path
    //     d="M104.935 46.9355H83.1612V172.742L66.2257 169.516V152.581L46.0645 149.355V187.258L104.935 202.581V46.9355ZM121.269 46.9355H181.548L177.516 71.0485H144.281V110.618H177.516L173.484 190.484L121.269 202.581V177.581L156.548 165.484L158.585 132.419L121.269 137.823V46.9355Z"
    //     fill="white"
    //     className={styles['icon__js']}
    //   />
    //   <path
    //     d="M103.149 12.2727L109.157 23.7145L115.315 12.2727H124.626L115.145 28.6364L124.882 45H115.613L109.157 33.6861L102.808 45H93.4329L103.149 28.6364L93.7738 12.2727H103.149ZM148.916 1.36364V45H139.69V10.1207H139.434L129.441 16.3849V8.20312L140.244 1.36364H148.916ZM176.396 45.9588C172.732 45.9446 169.578 45.0426 166.936 43.2528C164.308 41.4631 162.284 38.8707 160.864 35.4759C159.457 32.081 158.761 27.9972 158.776 23.2244C158.776 18.4659 159.479 14.4105 160.885 11.0582C162.305 7.70596 164.33 5.15625 166.957 3.40909C169.599 1.64773 172.746 0.767044 176.396 0.767044C180.047 0.767044 183.186 1.64773 185.814 3.40909C188.456 5.17045 190.487 7.72727 191.908 11.0795C193.328 14.4176 194.031 18.4659 194.017 23.2244C194.017 28.0114 193.307 32.1023 191.886 35.4972C190.48 38.892 188.463 41.4844 185.835 43.2741C183.207 45.0639 180.061 45.9588 176.396 45.9588ZM176.396 38.3097C178.896 38.3097 180.892 37.0526 182.384 34.5384C183.875 32.0241 184.614 28.2528 184.599 23.2244C184.599 19.9148 184.259 17.1591 183.577 14.9574C182.909 12.7557 181.957 11.1009 180.722 9.9929C179.5 8.88494 178.058 8.33097 176.396 8.33097C173.911 8.33097 171.922 9.57386 170.43 12.0597C168.939 14.5455 168.186 18.267 168.172 23.2244C168.172 26.5767 168.506 29.375 169.173 31.6193C169.855 33.8494 170.814 35.5256 172.05 36.6477C173.286 37.7557 174.734 38.3097 176.396 38.3097Z"
    //     fill="#C77B32"
    //   />
    //   <path
    //     d="M221.74 40.8388C221.362 38.6956 219.539 37.2176 217.678 37.5458C211.97 38.5523 206.385 34.0245 205.226 27.4514C204.067 20.8783 207.767 14.7132 213.475 13.7067C217.964 12.9151 222.422 15.513 224.666 20.0142L223.432 20.2318C222.323 20.4275 221.397 21.2398 220.948 22.4072C220.673 23.1287 220.603 23.9286 220.741 24.7155C220.824 25.183 220.977 25.6285 221.194 26.0389L221.266 26.16L221.414 26.3915L221.492 26.5019L228.381 35.6491C229.18 36.8684 230.511 37.5071 231.789 37.2817C233.072 37.0556 234.1 36.0009 234.434 34.5817L237.775 23.6307L237.811 23.5051L237.868 23.242L237.89 23.1092C237.958 22.644 237.948 22.1683 237.866 21.7008C237.725 20.9 237.381 20.1731 236.878 19.5984C236.064 18.6536 234.912 18.2076 233.803 18.4032L231.66 18.781C228.475 9.9544 220.291 4.48636 212.103 5.93012C202.673 7.59289 196.558 17.7826 198.473 28.6421C200.388 39.5016 209.619 46.9852 219.049 45.3224C220.91 44.9943 222.118 42.982 221.74 40.8388Z"
    //     fill="#C77B32"
    //   />
    //   <path
    //     d="M67.5 14.6174L69.1839 19.7998H74.6329L70.2245 23.0027L71.9084 28.1851L67.5 24.9822L63.0916 28.1851L64.7755 23.0027L60.3671 19.7998H65.8161L67.5 14.6174Z"
    //     fill="#C77B32"
    //   />
    //   <path
    //     d="M172.33 46.1174L175.03 48.5482L178.176 46.7318L176.698 50.0505L179.398 52.4812L175.785 52.1015L174.307 55.4202L173.552 51.8668L169.939 51.4871L173.085 49.6708L172.33 46.1174Z"
    //     fill="#C77B32"
    //   />
    //   <path
    //     d="M36.4469 201.913C36.2765 200.195 35.5449 198.859 34.2523 197.908C32.9597 196.956 31.2054 196.48 28.9895 196.48C27.4838 196.48 26.2125 196.693 25.1756 197.119C24.1387 197.531 23.3432 198.107 22.7892 198.845C22.2495 199.584 21.9796 200.422 21.9796 201.359C21.9512 202.141 22.1145 202.822 22.4696 203.405C22.839 203.987 23.3432 204.491 23.9824 204.918C24.6216 205.33 25.3603 205.692 26.1983 206.004C27.0364 206.303 27.9313 206.558 28.883 206.771L32.8034 207.709C34.7069 208.135 36.454 208.703 38.0449 209.413C39.6358 210.124 41.0137 210.997 42.1784 212.034C43.3432 213.071 44.2452 214.293 44.8844 215.699C45.5378 217.105 45.8716 218.717 45.8858 220.536C45.8716 223.206 45.1898 225.521 43.8404 227.482C42.5052 229.428 40.5733 230.94 38.0449 232.02C35.5307 233.085 32.498 233.618 28.9469 233.618C25.4242 233.618 22.356 233.078 19.7424 231.999C17.1429 230.919 15.1117 229.321 13.6486 227.205C12.1998 225.074 11.4398 222.439 11.3688 219.3H20.2963C20.3958 220.763 20.8148 221.984 21.5534 222.964C22.3063 223.93 23.3077 224.662 24.5577 225.159C25.8219 225.642 27.2495 225.884 28.8404 225.884C30.4029 225.884 31.7594 225.656 32.91 225.202C34.0748 224.747 34.9767 224.115 35.6159 223.305C36.2552 222.496 36.5748 221.565 36.5748 220.514C36.5748 219.534 36.2836 218.71 35.7012 218.043C35.133 217.375 34.2949 216.807 33.187 216.338C32.0932 215.869 30.7509 215.443 29.16 215.06L24.4086 213.866C20.7296 212.972 17.8248 211.572 15.6941 209.669C13.5634 207.766 12.5051 205.202 12.5194 201.977C12.5051 199.335 13.2083 197.027 14.6287 195.053C16.0634 193.078 18.0307 191.537 20.5307 190.429C23.0307 189.321 25.8716 188.767 29.0534 188.767C32.2921 188.767 35.1188 189.321 37.5336 190.429C39.9625 191.537 41.8517 193.078 43.2012 195.053C44.5506 197.027 45.2466 199.314 45.2892 201.913H36.4469ZM66.7079 233.639C63.3556 233.639 60.4721 232.929 58.0574 231.509C55.6568 230.074 53.8102 228.085 52.5176 225.543C51.2392 223 50.6 220.074 50.6 216.764C50.6 213.412 51.2463 210.472 52.5389 207.943C53.8457 205.401 55.6994 203.419 58.1 201.999C60.5005 200.564 63.3556 199.847 66.6653 199.847C69.5204 199.847 72.0204 200.365 74.1653 201.402C76.3102 202.439 78.0076 203.895 79.2576 205.77C80.5076 207.645 81.1966 209.847 81.3244 212.375H72.7591C72.5176 210.741 71.8784 209.428 70.8414 208.433C69.8187 207.425 68.4764 206.92 66.8145 206.92C65.4082 206.92 64.1795 207.304 63.1284 208.071C62.0914 208.824 61.2818 209.925 60.6994 211.374C60.117 212.822 59.8258 214.577 59.8258 216.636C59.8258 218.724 60.1099 220.5 60.6781 221.963C61.2605 223.426 62.0772 224.541 63.1284 225.308C64.1795 226.075 65.4082 226.459 66.8145 226.459C67.8514 226.459 68.7818 226.246 69.6056 225.82C70.4437 225.393 71.1326 224.776 71.6724 223.966C72.2264 223.142 72.5886 222.155 72.7591 221.004H81.3244C81.1824 223.504 80.5005 225.706 79.2789 227.609C78.0716 229.499 76.4025 230.976 74.2718 232.041C72.1412 233.107 69.6199 233.639 66.7079 233.639ZM96.4682 233.618C94.3801 233.618 92.5194 233.256 90.8858 232.531C89.2523 231.793 87.9597 230.706 87.008 229.271C86.0705 227.822 85.6017 226.018 85.6017 223.859C85.6017 222.041 85.9355 220.514 86.6032 219.278C87.2708 218.043 88.1799 217.048 89.3304 216.295C90.481 215.543 91.7878 214.974 93.2509 214.591C94.7282 214.207 96.2765 213.938 97.8958 213.781C99.7992 213.582 101.333 213.398 102.498 213.227C103.663 213.043 104.508 212.773 105.034 212.418C105.559 212.062 105.822 211.537 105.822 210.841V210.713C105.822 209.364 105.396 208.32 104.544 207.581C103.705 206.842 102.512 206.473 100.964 206.473C99.3304 206.473 98.0307 206.835 97.0648 207.56C96.0989 208.27 95.4597 209.165 95.1472 210.244L86.7523 209.562C87.1784 207.574 88.0165 205.855 89.2665 204.406C90.5165 202.943 92.1287 201.821 94.1032 201.04C96.0918 200.244 98.3929 199.847 101.007 199.847C102.825 199.847 104.565 200.06 106.227 200.486C107.903 200.912 109.387 201.572 110.68 202.467C111.987 203.362 113.017 204.513 113.769 205.919C114.522 207.311 114.899 208.98 114.899 210.926V233H106.291V228.462H106.035C105.509 229.484 104.806 230.386 103.926 231.168C103.045 231.935 101.987 232.538 100.751 232.979C99.5151 233.405 98.0875 233.618 96.4682 233.618ZM99.0676 227.354C100.403 227.354 101.582 227.091 102.605 226.565C103.627 226.026 104.43 225.301 105.012 224.392C105.595 223.483 105.886 222.453 105.886 221.303V217.83C105.602 218.014 105.211 218.185 104.714 218.341C104.231 218.483 103.684 218.618 103.073 218.746C102.463 218.859 101.852 218.966 101.241 219.065C100.63 219.151 100.076 219.229 99.579 219.3C98.5137 219.456 97.5833 219.705 96.7878 220.045C95.9924 220.386 95.3745 220.848 94.9341 221.43C94.4938 221.999 94.2736 222.709 94.2736 223.561C94.2736 224.797 94.7211 225.741 95.6159 226.395C96.525 227.034 97.6756 227.354 99.0676 227.354ZM139.348 200.273V207.091H119.639V200.273H139.348ZM124.114 192.432H133.191V222.943C133.191 223.781 133.318 224.435 133.574 224.903C133.83 225.358 134.185 225.678 134.639 225.862C135.108 226.047 135.648 226.139 136.259 226.139C136.685 226.139 137.111 226.104 137.537 226.033C137.963 225.947 138.29 225.884 138.517 225.841L139.945 232.595C139.49 232.737 138.851 232.901 138.027 233.085C137.203 233.284 136.202 233.405 135.023 233.447C132.835 233.533 130.918 233.241 129.27 232.574C127.637 231.906 126.365 230.869 125.456 229.463C124.547 228.057 124.1 226.281 124.114 224.136V192.432ZM162.669 200.273V207.091H142.96V200.273H162.669ZM147.434 192.432H156.511V222.943C156.511 223.781 156.639 224.435 156.894 224.903C157.15 225.358 157.505 225.678 157.96 225.862C158.428 226.047 158.968 226.139 159.579 226.139C160.005 226.139 160.431 226.104 160.857 226.033C161.284 225.947 161.61 225.884 161.838 225.841L163.265 232.595C162.811 232.737 162.171 232.901 161.347 233.085C160.524 233.284 159.522 233.405 158.343 233.447C156.156 233.533 154.238 233.241 152.59 232.574C150.957 231.906 149.686 230.869 148.776 229.463C147.867 228.057 147.42 226.281 147.434 224.136V192.432ZM183.144 233.639C179.778 233.639 176.88 232.957 174.451 231.594C172.036 230.216 170.176 228.27 168.869 225.756C167.562 223.227 166.909 220.237 166.909 216.786C166.909 213.419 167.562 210.464 168.869 207.922C170.176 205.379 172.015 203.398 174.387 201.977C176.774 200.557 179.572 199.847 182.782 199.847C184.941 199.847 186.951 200.195 188.812 200.891C190.687 201.572 192.32 202.602 193.713 203.98C195.119 205.358 196.213 207.091 196.994 209.179C197.775 211.253 198.166 213.682 198.166 216.466V218.959H170.531V213.334H189.622C189.622 212.027 189.338 210.869 188.769 209.861C188.201 208.852 187.413 208.064 186.404 207.496C185.41 206.913 184.252 206.622 182.931 206.622C181.553 206.622 180.332 206.942 179.267 207.581C178.215 208.206 177.392 209.051 176.795 210.116C176.198 211.168 175.893 212.339 175.879 213.632V218.98C175.879 220.599 176.177 221.999 176.774 223.178C177.384 224.357 178.244 225.266 179.352 225.905C180.46 226.544 181.774 226.864 183.294 226.864C184.302 226.864 185.225 226.722 186.063 226.438C186.901 226.153 187.619 225.727 188.215 225.159C188.812 224.591 189.267 223.895 189.579 223.071L197.974 223.625C197.548 225.642 196.674 227.403 195.353 228.909C194.046 230.401 192.356 231.565 190.282 232.403C188.222 233.227 185.843 233.639 183.144 233.639ZM204.089 233V200.273H212.889V205.983H213.23C213.826 203.952 214.828 202.418 216.234 201.381C217.64 200.33 219.259 199.804 221.092 199.804C221.546 199.804 222.036 199.832 222.562 199.889C223.088 199.946 223.549 200.024 223.947 200.124V208.178C223.521 208.05 222.931 207.936 222.178 207.837C221.426 207.737 220.737 207.688 220.112 207.688C218.776 207.688 217.583 207.979 216.532 208.561C215.495 209.129 214.671 209.925 214.061 210.947C213.464 211.97 213.166 213.149 213.166 214.484V233H204.089Z"
    //     fill="#C77B32"
    //   />
    // </svg>
  );
};

export { JavascriptSvg };
