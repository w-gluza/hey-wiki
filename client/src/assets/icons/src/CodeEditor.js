import React from "react";

const SVG = ({
  style = {},
  fill = "",
  alt = "",
  width = "100%",
  className = "",
  viewBox = "0 0 160 200",
}) => (
  <svg
    fill={fill}
    alt={alt}
    width={width}
    style={style}
    height={width}
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ""}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
      <rect
        x="1"
        y="1"
        width="158"
        height="197.574"
        rx="24"
        fill="#fff"
        stroke="#36C"
        stroke-width="2"
      />
      <path
        d="M0 164.077h160V175c0 13.807-11.193 25-25 25H25c-13.807 0-25-11.193-25-25v-10.923Z"
        fill="url(#a)"
        class="contract"
      />
      <path
        d="M1 165.077h158V175c0 13.255-10.745 24-24 24H25c-13.255 0-24-10.745-24-24v-9.923Z"
        fill="#fff"
        stroke="#36C"
        stroke-width="2"
        class="expand"
      />
      <path
        d="M41.555 177.666c-1.073 0-1.917.38-2.532 1.141-.614.76-.921 1.81-.921 3.148 0 1.401.294 2.461.882 3.18.594.719 1.45 1.078 2.57 1.078.485 0 .954-.047 1.407-.14.453-.099.924-.224 1.414-.375v1.601c-.896.339-1.911.508-3.047.508-1.672 0-2.956-.505-3.851-1.516-.896-1.015-1.344-2.466-1.344-4.351 0-1.188.216-2.227.648-3.117.438-.891 1.068-1.573 1.89-2.047.824-.474 1.79-.711 2.9-.711 1.166 0 2.244.244 3.234.734l-.672 1.555a9.505 9.505 0 0 0-1.227-.477 4.311 4.311 0 0 0-1.351-.211Zm12.75 5.649c0 1.411-.362 2.513-1.086 3.304-.724.792-1.732 1.188-3.024 1.188-.807 0-1.52-.182-2.14-.547a3.613 3.613 0 0 1-1.43-1.57c-.333-.683-.5-1.474-.5-2.375 0-1.401.36-2.495 1.078-3.282.719-.786 1.732-1.179 3.04-1.179 1.25 0 2.239.403 2.968 1.211.73.802 1.094 1.885 1.094 3.25Zm-6.29 0c0 1.994.738 2.992 2.212 2.992 1.458 0 2.187-.998 2.187-2.992 0-1.974-.734-2.961-2.203-2.961-.77 0-1.33.255-1.68.765-.343.511-.515 1.243-.515 2.196Zm11.32 4.492c-1.077 0-1.918-.391-2.523-1.172-.604-.781-.906-1.878-.906-3.289 0-1.417.305-2.518.914-3.305.615-.791 1.464-1.187 2.547-1.187 1.136 0 2 .419 2.594 1.258h.094c-.089-.62-.133-1.11-.133-1.469v-3.149h1.844v12.157h-1.438l-.32-1.133h-.086c-.589.859-1.45 1.289-2.586 1.289Zm.493-1.484c.755 0 1.305-.211 1.649-.633.343-.427.52-1.117.53-2.071v-.257c0-1.089-.176-1.862-.53-2.321-.355-.458-.91-.687-1.664-.687-.646 0-1.144.263-1.493.789-.349.521-.523 1.265-.523 2.234 0 .959.17 1.69.508 2.196.338.5.846.75 1.523.75Zm10.336 1.484c-1.344 0-2.396-.391-3.156-1.172-.755-.786-1.133-1.867-1.133-3.242 0-1.412.352-2.521 1.055-3.328.703-.808 1.669-1.211 2.898-1.211 1.14 0 2.042.346 2.703 1.039.662.693.992 1.646.992 2.859v.992h-5.757c.026.839.252 1.485.68 1.938.426.448 1.028.672 1.804.672.51 0 .984-.047 1.422-.141a7.66 7.66 0 0 0 1.422-.484v1.492a5.638 5.638 0 0 1-1.36.453 8.297 8.297 0 0 1-1.57.133Zm-.336-7.563c-.583 0-1.052.185-1.406.555-.35.37-.557.909-.625 1.617h3.922c-.01-.713-.182-1.252-.516-1.617-.333-.37-.791-.555-1.375-.555Zm16.594 7.407H79.96v-11.422h6.46v1.578h-4.593v3.109h4.305v1.563h-4.305v3.586h4.594v1.586Zm5.195.156c-1.078 0-1.92-.391-2.523-1.172-.604-.781-.906-1.878-.906-3.289 0-1.417.304-2.518.914-3.305.614-.791 1.463-1.187 2.546-1.187 1.136 0 2 .419 2.594 1.258h.094c-.089-.62-.133-1.11-.133-1.469v-3.149h1.844v12.157h-1.438l-.32-1.133h-.086c-.588.859-1.45 1.289-2.586 1.289Zm.492-1.484c.756 0 1.305-.211 1.649-.633.344-.427.52-1.117.531-2.071v-.257c0-1.089-.177-1.862-.531-2.321-.354-.458-.909-.687-1.664-.687-.646 0-1.143.263-1.492.789-.35.521-.524 1.265-.524 2.234 0 .959.17 1.69.508 2.196.338.5.846.75 1.523.75Zm8.399 1.328h-1.836v-8.641h1.836v8.641Zm-1.945-10.93c0-.328.088-.581.265-.758.182-.177.44-.265.774-.265.322 0 .572.088.75.265.182.177.273.43.273.758 0 .312-.091.56-.273.742-.178.177-.428.266-.75.266-.334 0-.592-.089-.774-.266-.177-.182-.266-.43-.266-.742Zm7.796 9.602c.448 0 .896-.071 1.344-.211v1.382a3.53 3.53 0 0 1-.789.219 5.09 5.09 0 0 1-.992.094c-1.74 0-2.61-.917-2.61-2.75v-4.656h-1.179v-.813l1.265-.672.625-1.828h1.133v1.922h2.461v1.391h-2.461v4.625c0 .442.11.77.328.984.224.208.516.313.875.313Zm10.743-3.008c0 1.411-.362 2.513-1.086 3.304-.724.792-1.732 1.188-3.024 1.188-.807 0-1.521-.182-2.14-.547a3.61 3.61 0 0 1-1.43-1.57c-.333-.683-.5-1.474-.5-2.375 0-1.401.359-2.495 1.078-3.282.719-.786 1.732-1.179 3.039-1.179 1.25 0 2.24.403 2.969 1.211.729.802 1.094 1.885 1.094 3.25Zm-6.29 0c0 1.994.737 2.992 2.211 2.992 1.459 0 2.188-.998 2.188-2.992 0-1.974-.734-2.961-2.203-2.961-.771 0-1.331.255-1.68.765-.344.511-.516 1.243-.516 2.196Zm12.79-4.461c.369 0 .674.026.914.078l-.18 1.711a3.44 3.44 0 0 0-.813-.094c-.734 0-1.33.24-1.789.719-.453.479-.679 1.101-.679 1.867v4.516h-1.836v-8.641h1.437l.242 1.523h.094a3.447 3.447 0 0 1 1.117-1.226 2.686 2.686 0 0 1 1.493-.453Z"
        fill="#fff"
        class="contract"
      />
      <path
        d="M41.555 177.666c-1.073 0-1.917.38-2.532 1.141-.614.76-.921 1.81-.921 3.148 0 1.401.294 2.461.882 3.18.594.719 1.45 1.078 2.57 1.078.485 0 .954-.047 1.407-.14.453-.099.924-.224 1.414-.375v1.601c-.896.339-1.911.508-3.047.508-1.672 0-2.956-.505-3.851-1.516-.896-1.015-1.344-2.466-1.344-4.351 0-1.188.216-2.227.648-3.117.438-.891 1.068-1.573 1.89-2.047.824-.474 1.79-.711 2.9-.711 1.166 0 2.244.244 3.234.734l-.672 1.555a9.505 9.505 0 0 0-1.227-.477 4.311 4.311 0 0 0-1.351-.211Zm12.75 5.649c0 1.411-.362 2.513-1.086 3.304-.724.792-1.732 1.188-3.024 1.188-.807 0-1.52-.182-2.14-.547a3.613 3.613 0 0 1-1.43-1.57c-.333-.683-.5-1.474-.5-2.375 0-1.401.36-2.495 1.078-3.282.719-.786 1.732-1.179 3.04-1.179 1.25 0 2.239.403 2.968 1.211.73.802 1.094 1.885 1.094 3.25Zm-6.29 0c0 1.994.738 2.992 2.212 2.992 1.458 0 2.187-.998 2.187-2.992 0-1.974-.734-2.961-2.203-2.961-.77 0-1.33.255-1.68.765-.343.511-.515 1.243-.515 2.196Zm11.32 4.492c-1.077 0-1.918-.391-2.523-1.172-.604-.781-.906-1.878-.906-3.289 0-1.417.305-2.518.914-3.305.615-.791 1.464-1.187 2.547-1.187 1.136 0 2 .419 2.594 1.258h.094c-.089-.62-.133-1.11-.133-1.469v-3.149h1.844v12.157h-1.438l-.32-1.133h-.086c-.589.859-1.45 1.289-2.586 1.289Zm.493-1.484c.755 0 1.305-.211 1.649-.633.343-.427.52-1.117.53-2.071v-.257c0-1.089-.176-1.862-.53-2.321-.355-.458-.91-.687-1.664-.687-.646 0-1.144.263-1.493.789-.349.521-.523 1.265-.523 2.234 0 .959.17 1.69.508 2.196.338.5.846.75 1.523.75Zm10.336 1.484c-1.344 0-2.396-.391-3.156-1.172-.755-.786-1.133-1.867-1.133-3.242 0-1.412.352-2.521 1.055-3.328.703-.808 1.669-1.211 2.898-1.211 1.14 0 2.042.346 2.703 1.039.662.693.992 1.646.992 2.859v.992h-5.757c.026.839.252 1.485.68 1.938.426.448 1.028.672 1.804.672.51 0 .984-.047 1.422-.141a7.66 7.66 0 0 0 1.422-.484v1.492a5.638 5.638 0 0 1-1.36.453 8.297 8.297 0 0 1-1.57.133Zm-.336-7.563c-.583 0-1.052.185-1.406.555-.35.37-.557.909-.625 1.617h3.922c-.01-.713-.182-1.252-.516-1.617-.333-.37-.791-.555-1.375-.555Zm16.594 7.407H79.96v-11.422h6.46v1.578h-4.593v3.109h4.305v1.563h-4.305v3.586h4.594v1.586Zm5.195.156c-1.078 0-1.92-.391-2.523-1.172-.604-.781-.906-1.878-.906-3.289 0-1.417.304-2.518.914-3.305.614-.791 1.463-1.187 2.546-1.187 1.136 0 2 .419 2.594 1.258h.094c-.089-.62-.133-1.11-.133-1.469v-3.149h1.844v12.157h-1.438l-.32-1.133h-.086c-.588.859-1.45 1.289-2.586 1.289Zm.492-1.484c.756 0 1.305-.211 1.649-.633.344-.427.52-1.117.531-2.071v-.257c0-1.089-.177-1.862-.531-2.321-.354-.458-.909-.687-1.664-.687-.646 0-1.143.263-1.492.789-.35.521-.524 1.265-.524 2.234 0 .959.17 1.69.508 2.196.338.5.846.75 1.523.75Zm8.399 1.328h-1.836v-8.641h1.836v8.641Zm-1.945-10.93c0-.328.088-.581.265-.758.182-.177.44-.265.774-.265.322 0 .572.088.75.265.182.177.273.43.273.758 0 .312-.091.56-.273.742-.178.177-.428.266-.75.266-.334 0-.592-.089-.774-.266-.177-.182-.266-.43-.266-.742Zm7.796 9.602c.448 0 .896-.071 1.344-.211v1.382a3.53 3.53 0 0 1-.789.219 5.09 5.09 0 0 1-.992.094c-1.74 0-2.61-.917-2.61-2.75v-4.656h-1.179v-.813l1.265-.672.625-1.828h1.133v1.922h2.461v1.391h-2.461v4.625c0 .442.11.77.328.984.224.208.516.313.875.313Zm10.743-3.008c0 1.411-.362 2.513-1.086 3.304-.724.792-1.732 1.188-3.024 1.188-.807 0-1.521-.182-2.14-.547a3.61 3.61 0 0 1-1.43-1.57c-.333-.683-.5-1.474-.5-2.375 0-1.401.359-2.495 1.078-3.282.719-.786 1.732-1.179 3.039-1.179 1.25 0 2.24.403 2.969 1.211.729.802 1.094 1.885 1.094 3.25Zm-6.29 0c0 1.994.737 2.992 2.211 2.992 1.459 0 2.188-.998 2.188-2.992 0-1.974-.734-2.961-2.203-2.961-.771 0-1.331.255-1.68.765-.344.511-.516 1.243-.516 2.196Zm12.79-4.461c.369 0 .674.026.914.078l-.18 1.711a3.44 3.44 0 0 0-.813-.094c-.734 0-1.33.24-1.789.719-.453.479-.679 1.101-.679 1.867v4.516h-1.836v-8.641h1.437l.242 1.523h.094a3.447 3.447 0 0 1 1.117-1.226 2.686 2.686 0 0 1 1.493-.453Z"
        fill="#36C"
        class="expand"
      />
      <path
        d="M138.69 142.01H22.31c-2.245 0-4.06-1.798-4.06-4.009V27.259c0-2.211 1.815-4.009 4.06-4.009h116.38c2.245 0 4.06 1.798 4.06 4.01V138c0 2.211-1.815 4.009-4.06 4.009Z"
        fill="#F8F9FA"
        stroke="#C8CCD1"
        stroke-width=".5"
      />
      <path
        d="M143 27.26v12.777H18V27.26c0-1.13.454-2.213 1.262-3.012A4.336 4.336 0 0 1 22.31 23H138.69c1.144 0 2.24.449 3.048 1.247A4.232 4.232 0 0 1 143 27.26Z"
        fill="#A2A9B1"
      />
      <path
        d="M43.862 33.648c1.19 0 2.155-.953 2.155-2.13 0-1.176-.965-2.13-2.155-2.13s-2.155.954-2.155 2.13c0 1.177.965 2.13 2.155 2.13ZM35.241 33.648c1.19 0 2.155-.953 2.155-2.13 0-1.176-.965-2.13-2.155-2.13s-2.155.954-2.155 2.13c0 1.177.965 2.13 2.155 2.13ZM26.62 33.648c1.19 0 2.155-.953 2.155-2.13 0-1.176-.964-2.13-2.155-2.13-1.19 0-2.155.954-2.155 2.13 0 1.177.965 2.13 2.155 2.13Z"
        fill="#F8F9FA"
      />
      <path
        d="M48.172 97.675h-17.24c-.572 0-1.12-.224-1.525-.623a2.117 2.117 0 0 1-.631-1.506c0-.565.227-1.107.631-1.506.404-.4.953-.624 1.524-.624h17.241c.572 0 1.12.224 1.525.624a2.117 2.117 0 0 1 0 3.012c-.405.399-.953.623-1.524.623ZM56.793 106.194H30.931c-.572 0-1.12-.224-1.524-.624a2.116 2.116 0 0 1-.631-1.506c0-.564.227-1.106.631-1.505.404-.4.952-.624 1.524-.624h25.862c.572 0 1.12.224 1.524.624.404.399.631.941.631 1.505 0 .565-.227 1.107-.631 1.506-.404.4-.953.624-1.524.624ZM43.862 114.713H30.93a2.17 2.17 0 0 1-1.524-.624 2.116 2.116 0 0 1 0-3.012 2.17 2.17 0 0 1 1.524-.624h12.93c.573 0 1.12.225 1.525.624a2.116 2.116 0 0 1 0 3.012 2.17 2.17 0 0 1-1.524.624ZM52.483 123.231H30.93c-.572 0-1.12-.224-1.524-.624a2.116 2.116 0 0 1 0-3.012 2.17 2.17 0 0 1 1.524-.623h21.552c.571 0 1.12.224 1.524.623a2.116 2.116 0 0 1 0 3.012c-.405.4-.953.624-1.524.624ZM91.276 131.75H30.93a2.17 2.17 0 0 1-1.524-.624 2.116 2.116 0 0 1 0-3.012 2.17 2.17 0 0 1 1.524-.624h60.345c.571 0 1.12.225 1.524.624a2.116 2.116 0 0 1 0 3.012 2.17 2.17 0 0 1-1.524.624ZM91.275 106.194H65.413c-.571 0-1.12-.224-1.524-.624a2.116 2.116 0 0 1-.63-1.506c0-.564.226-1.106.63-1.505.405-.4.953-.624 1.524-.624h25.862c.572 0 1.12.224 1.524.624.404.399.631.941.631 1.505 0 .565-.227 1.107-.63 1.506-.405.4-.953.624-1.525.624ZM74.034 114.713H52.483a2.17 2.17 0 0 1-1.524-.624 2.116 2.116 0 0 1-.632-1.506c0-.565.228-1.106.632-1.506a2.17 2.17 0 0 1 1.524-.624h21.551c.572 0 1.12.225 1.524.624a2.116 2.116 0 0 1 0 3.012 2.17 2.17 0 0 1-1.524.624ZM91.276 114.713h-8.621a2.17 2.17 0 0 1-1.524-.624 2.116 2.116 0 0 1 0-3.012 2.17 2.17 0 0 1 1.524-.624h8.62c.572 0 1.12.225 1.525.624a2.116 2.116 0 0 1 0 3.012 2.17 2.17 0 0 1-1.524.624ZM91.276 123.231H61.103c-.571 0-1.12-.224-1.524-.624a2.116 2.116 0 0 1-.63-1.506c0-.564.226-1.106.63-1.506a2.169 2.169 0 0 1 1.524-.623h30.173c.571 0 1.12.224 1.524.623a2.116 2.116 0 0 1 0 3.012c-.405.4-.953.624-1.524.624ZM112.827 55.083h-8.62c-.572 0-1.12-.225-1.524-.624a2.118 2.118 0 0 1-.631-1.506c0-.565.227-1.107.631-1.506.404-.4.952-.624 1.524-.624h8.62c.572 0 1.12.225 1.524.624a2.114 2.114 0 0 1 0 3.012c-.404.4-.952.623-1.524.623ZM130.069 63.601h-25.862c-.572 0-1.12-.224-1.524-.624a2.117 2.117 0 0 1-.631-1.506c0-.564.227-1.106.631-1.505.404-.4.952-.624 1.524-.624h25.862c.571 0 1.12.224 1.524.624.404.399.631.94.631 1.505s-.227 1.107-.631 1.506a2.17 2.17 0 0 1-1.524.624ZM112.827 72.12h-8.62c-.572 0-1.12-.225-1.524-.624a2.117 2.117 0 0 1-.631-1.506c0-.565.227-1.107.631-1.506.404-.4.952-.624 1.524-.624h8.62c.572 0 1.12.225 1.524.624a2.114 2.114 0 0 1 0 3.012c-.404.399-.952.623-1.524.623ZM130.069 80.638h-17.241c-.572 0-1.12-.224-1.524-.624a2.117 2.117 0 0 1-.631-1.505c0-.565.227-1.107.631-1.506.404-.4.952-.624 1.524-.624h17.241c.572 0 1.12.224 1.524.624.404.399.631.94.631 1.505s-.227 1.107-.631 1.506c-.404.4-.952.624-1.524.624Z"
        fill="#A2A9B1"
      />
      <path d="M104.207 104.064h8.621v8.519h-8.621v-8.519Z" fill="#36C" />
      <path
        d="M130.069 106.194h-8.62c-.572 0-1.12-.224-1.524-.624a2.113 2.113 0 0 1 0-3.011c.404-.4.952-.624 1.524-.624h8.62c.572 0 1.12.224 1.524.624.404.399.631.941.631 1.505 0 .565-.227 1.107-.631 1.506-.404.4-.952.624-1.524.624Z"
        fill="#A2A9B1"
      />
      <path d="M104.207 121.102h8.621v8.518h-8.621v-8.518Z" fill="#36C" />
      <path
        d="M130.069 131.75h-8.62a2.17 2.17 0 0 1-1.524-.624 2.114 2.114 0 0 1 0-3.012 2.17 2.17 0 0 1 1.524-.624h8.62c.572 0 1.12.225 1.524.624a2.117 2.117 0 0 1 0 3.012 2.17 2.17 0 0 1-1.524.624ZM130.069 123.231h-8.62c-.572 0-1.12-.224-1.524-.624a2.113 2.113 0 0 1 0-3.011c.404-.4.952-.624 1.524-.624h8.62c.572 0 1.12.224 1.524.624.404.399.631.941.631 1.506 0 .564-.227 1.106-.631 1.505-.404.4-.952.624-1.524.624ZM112.827 97.675h-8.62c-.572 0-1.12-.224-1.524-.623a2.117 2.117 0 0 1-.631-1.506c0-.565.227-1.107.631-1.506.404-.4.952-.624 1.524-.624h8.62c.572 0 1.12.224 1.524.624a2.114 2.114 0 0 1 0 3.012c-.404.399-.952.623-1.524.623ZM130.069 114.713h-8.62a2.17 2.17 0 0 1-1.524-.624 2.114 2.114 0 0 1 0-3.012 2.17 2.17 0 0 1 1.524-.624h8.62c.572 0 1.12.225 1.524.624a2.117 2.117 0 0 1 0 3.012 2.17 2.17 0 0 1-1.524.624ZM104.207 80.638c1.19 0 2.155-.953 2.155-2.13 0-1.176-.965-2.13-2.155-2.13s-2.155.954-2.155 2.13c0 1.177.965 2.13 2.155 2.13ZM121.448 89.157h-17.241c-.572 0-1.12-.225-1.524-.624a2.118 2.118 0 0 1-.631-1.506c0-.565.227-1.106.631-1.506.404-.4.952-.624 1.524-.624h17.241c.572 0 1.12.225 1.524.624.404.4.631.941.631 1.506 0 .565-.227 1.107-.631 1.506-.404.4-.952.624-1.524.624Z"
        fill="#A2A9B1"
      />
      <rect
        width="16.346"
        height="3.245"
        rx="1.623"
        transform="matrix(.78792 -.61577 .64278 .76606 28.776 69.447)"
        fill="#36C"
      />
      <rect
        width="16.346"
        height="3.245"
        rx="1.623"
        transform="matrix(.78792 .61577 -.64278 .76606 31.07 67.578)"
        fill="#36C"
      />
      <rect
        width="16.346"
        height="3.245"
        rx="1.623"
        transform="matrix(-.78792 .61577 -.64278 -.76606 84.087 70.064)"
        fill="#36C"
      />
      <rect
        width="16.346"
        height="3.245"
        rx="1.623"
        transform="matrix(-.78792 -.61577 .64278 -.76606 81.793 71.932)"
        fill="#36C"
      />
      <rect
        width="36.277"
        height="3.289"
        rx="1.645"
        transform="matrix(-.48255 .87587 -.8897 -.45655 66.685 54.583)"
        fill="#36C"
      />
      <defs>
        <linearGradient
          id="a"
          x1="0"
          y1="167.2"
          x2="160.824"
          y2="195.28"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#36C" />
          <stop offset="1" stop-color="#2A4B8D" />
        </linearGradient>
      </defs>
    </svg>
);

export default SVG;