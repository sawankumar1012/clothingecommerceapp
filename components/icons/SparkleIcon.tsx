import * as React from "react"
import Svg, {
  SvgProps,
  Path,
  Defs,
  LinearGradient,
  Stop,
  RadialGradient,
} from "react-native-svg"
const SparkleIcon = (props: SvgProps) => (
  <Svg
   
    width={30}
    height={30}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      fill="#FCCE38"
      d="M21.091 6.708a1.531 1.531 0 0 1-2.16 0c.595.595.595 1.56 0 2.16a1.531 1.531 0 0 1 2.16 0 1.531 1.531 0 0 1 0-2.16Z"
      opacity={0.5}
    />
    <Path
      fill="#FCCE38"
      d="M16.229 9.017a4.222 4.222 0 0 1-5.966 0 4.221 4.221 0 0 1 0 5.966 4.222 4.222 0 0 1 5.966 0 4.211 4.211 0 0 1 0-5.966Z"
    />
    <Path
      fill="url(#a)"
      d="M16.229 14.983a4.215 4.215 0 1 1-5.96-5.96 4.215 4.215 0 0 1 5.96 5.96Z"
    />
    <Path
      fill="url(#b)"
      d="m16.72 12.434 3.96-.411c.029-.006.029-.046 0-.046l-3.96-.411A3.049 3.049 0 0 1 14 8.84l-.732-7.388c-.005-.029-.045-.029-.045 0l-.715 7.377a3.04 3.04 0 0 1-2.72 2.737l-3.982.411c-.029.006-.029.046 0 .046l3.982.412a3.05 3.05 0 0 1 2.72 2.737l.715 7.377c0 .028.045.028.045 0L14 15.16a3.054 3.054 0 0 1 2.72-2.726Z"
    />
    <Path
      fill="url(#c)"
      d="M13.086 12.217c-.846-1.068-7.28-.24-7.28-.24-.029.006-.029.046 0 .046l3.982.411a3.05 3.05 0 0 1 2.72 2.737l.669 6.915.046.023s.765-8.755-.137-9.892Z"
    />
    <Path
      fill="url(#d)"
      d="M16.72 11.566A3.049 3.049 0 0 1 14 8.84l-.474-4.772s-.149 6.435 1.268 7.366c1.115.732.783.029 5.886.543l-3.96-.412Z"
    />
    <Path
      fill="url(#e)"
      d="M12.754 9.554c.309-3.783.446-5.623.663-6.628l-.148-1.48c-.006-.029-.046-.029-.046 0l-.714 7.377a3.04 3.04 0 0 1-2.72 2.737l-2.635.274c3.063.355 5.423-.102 5.6-2.28Z"
    />
    <Path
      fill="url(#f)"
      d="m13.223 22.549-.715-7.377a3.04 3.04 0 0 0-2.72-2.738l-3.983-.411s3.315.177 4.012.177c.697 0 2.743.412 2.931 2.96.189 2.549.475 7.389.475 7.389Z"
    />
    <Path
      fill="url(#g)"
      d="m13.269 22.549.714-7.377a3.04 3.04 0 0 1 2.72-2.738l3.983-.411s-3.315.177-4.012.177c-.697 0-2.743.412-2.931 2.96-.189 2.549-.474 7.389-.474 7.389Z"
    />
    <Path
      fill="#FCCE38"
      d="M6.091 6.377c-.76.76-1.988.76-2.742 0 .76.76.76 1.989 0 2.743.76-.76 1.988-.76 2.742 0a1.945 1.945 0 0 1 0-2.743Z"
      opacity={0.5}
    />
    <Path
      fill="url(#h)"
      d="M4.72 9.611a1.863 1.863 0 1 0 0-3.726 1.863 1.863 0 0 0 0 3.726Z"
    />
    <Path
      fill="url(#i)"
      d="m3.189 7.56-1.749.183c-.011 0-.011.017 0 .023l1.749.182a1.345 1.345 0 0 1 1.2 1.206l.325 3.257c0 .012.017.012.023 0l.314-3.257a1.345 1.345 0 0 1 1.2-1.206l1.76-.182c.012 0 .012-.018 0-.023l-1.76-.183a1.35 1.35 0 0 1-1.2-1.206l-.314-3.257c0-.011-.017-.011-.023 0L4.39 6.36a1.355 1.355 0 0 1-1.2 1.2Z"
    />
    <Path
      fill="url(#j)"
      d="M4.794 7.657c.371.469 3.211.103 3.211.103.012 0 .012-.017 0-.023l-1.76-.183a1.35 1.35 0 0 1-1.2-1.206l-.297-3.05-.017-.012s-.337 3.863.063 4.371Z"
    />
    <Path
      fill="url(#k)"
      d="M3.189 7.943a1.345 1.345 0 0 1 1.2 1.205l.21 2.103S4.67 8.411 4.04 8c-.49-.32-.348-.012-2.6-.24l1.75.183Z"
    />
    <Path
      fill="url(#l)"
      d="M4.937 8.828c-.137 1.669-.194 2.48-.291 2.926l.063.651c0 .012.017.012.022 0l.315-3.257a1.345 1.345 0 0 1 1.2-1.206l1.16-.12c-1.349-.16-2.389.046-2.469 1.006Z"
    />
    <Path
      fill="url(#m)"
      d="m4.731 3.091.315 3.257a1.345 1.345 0 0 0 1.2 1.206l1.76.183s-1.463-.08-1.772-.08c-.308 0-1.211-.183-1.297-1.303a225.985 225.985 0 0 1-.206-3.263Z"
    />
    <Path
      fill="url(#n)"
      d="m4.709 3.091-.315 3.257a1.345 1.345 0 0 1-1.2 1.206l-1.76.183s1.463-.08 1.772-.08c.308 0 1.211-.183 1.297-1.303.086-1.126.206-3.263.206-3.263Z"
    />
    <Path
      fill="url(#o)"
      d="M20.011 9.235a1.446 1.446 0 1 0 0-2.892 1.446 1.446 0 0 0 0 2.892Z"
    />
    <Path
      fill="url(#p)"
      d="m21.206 7.897 1.36-.102c.011 0 .011-.012 0-.012l-1.36-.103c-.492-.04-.886-.331-.932-.703l-.251-1.902c0-.006-.017-.006-.017 0l-.246 1.897c-.046.371-.44.668-.931.703l-1.366.108c-.012 0-.012.012 0 .012l1.366.108c.497.04.885.332.931.703l.246 1.897c0 .006.017.006.017 0l.251-1.903c.046-.371.44-.663.932-.703Z"
    />
    <Path
      fill="url(#q)"
      d="M19.96 7.84c-.291-.274-2.497-.063-2.497-.063-.012 0-.012.012 0 .012l1.366.108c.497.04.885.332.931.703l.229 1.777.017.006c0 .006.263-2.246-.046-2.543Z"
    />
    <Path
      fill="url(#r)"
      d="M18.823 7.898c.491.04.886.331.931.703l.16 1.228s.052-1.657-.434-1.897c-.383-.189-.268-.006-2.017-.137l1.36.103Z"
    />
    <Path
      fill="url(#s)"
      d="M19.846 7.16c.103-.971.154-1.445.228-1.703l-.051-.382c0-.006-.017-.006-.017 0l-.246 1.897c-.046.371-.44.668-.931.703l-.903.068c1.046.092 1.857-.023 1.92-.583Z"
    />
    <Path
      fill="url(#t)"
      d="m20.006 10.504-.246-1.898c-.046-.371-.44-.668-.931-.703l-1.366-.108s1.137.046 1.377.046.943.102 1.006.76c.063.657.16 1.902.16 1.902Z"
    />
    <Path
      fill="url(#u)"
      d="m20.023 10.504.246-1.898c.045-.371.44-.668.931-.703l1.366-.108s-1.137.046-1.377.046-.943.102-1.006.76c-.069.657-.16 1.902-.16 1.902Z"
    />
    <Path
      fill="#FCCE38"
      d="M9.097 16.674a1.338 1.338 0 0 1-1.897 0 1.338 1.338 0 0 1 0 1.898 1.338 1.338 0 0 1 1.897 0 1.338 1.338 0 0 1 0-1.898Z"
      opacity={0.5}
    />
    <Path
      fill="url(#v)"
      d="M8.149 18.908a1.286 1.286 0 1 0 0-2.571 1.286 1.286 0 0 0 0 2.571Z"
    />
    <Path
      fill="url(#w)"
      d="m7.091 17.491-1.205.126c-.012 0-.012.011 0 .017l1.205.126c.44.045.783.394.829.834l.223 2.252c0 .011.011.011.017 0l.217-2.252a.926.926 0 0 1 .829-.834l1.211-.126c.011 0 .011-.011 0-.017l-1.211-.126a.926.926 0 0 1-.829-.834l-.217-2.252c0-.01-.012-.01-.017 0l-.223 2.252a.936.936 0 0 1-.829.834Z"
    />
    <Path
      fill="url(#x)"
      d="M8.2 17.554c.257.326 2.217.075 2.217.075.011 0 .011-.012 0-.018l-1.212-.125a.926.926 0 0 1-.828-.835l-.206-2.108-.011-.006c-.006.006-.235 2.674.04 3.017Z"
    />
    <Path
      fill="url(#y)"
      d="M7.091 17.754c.44.046.783.394.829.834l.143 1.452s.045-1.96-.389-2.246c-.337-.223-.24-.011-1.794-.166l1.211.126Z"
    />
    <Path
      fill="url(#z)"
      d="M8.297 18.366c-.091 1.154-.137 1.714-.2 2.022l.046.452c0 .011.011.011.017 0l.217-2.252a.926.926 0 0 1 .829-.834l.805-.086c-.937-.102-1.657.035-1.714.698Z"
    />
    <Path
      fill="url(#A)"
      d="m8.154 14.405.217 2.252c.04.44.389.788.829.834l1.211.126s-1.011-.052-1.223-.052c-.211 0-.834-.125-.891-.903-.057-.782-.143-2.257-.143-2.257Z"
    />
    <Path
      fill="url(#B)"
      d="m8.143 14.405-.218 2.252a.926.926 0 0 1-.828.834l-1.212.126s1.012-.052 1.223-.052c.212 0 .835-.125.892-.903.057-.782.143-2.257.143-2.257Z"
    />
    <Defs>
      <LinearGradient
        id="b"
        x1={13.861}
        x2={10.399}
        y1={14.605}
        y2={-0.016}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FCCE38" />
        <Stop offset={0.215} stopColor="#FCD44F" />
        <Stop offset={0.505} stopColor="#FBDB67" />
        <Stop offset={0.774} stopColor="#FBDF75" />
        <Stop offset={1} stopColor="#FBE07A" />
      </LinearGradient>
      <LinearGradient
        id="c"
        x1={11.598}
        x2={17.514}
        y1={16.833}
        y2={16.256}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FCCE38" />
        <Stop offset={0.215} stopColor="#FCD44F" />
        <Stop offset={0.505} stopColor="#FBDB67" />
        <Stop offset={0.774} stopColor="#FBDF75" />
        <Stop offset={1} stopColor="#FBE07A" />
      </LinearGradient>
      <LinearGradient
        id="d"
        x1={18.022}
        x2={13.853}
        y1={4.613}
        y2={20.132}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FCCE38" />
        <Stop offset={0.364} stopColor="#FCCE38" />
        <Stop offset={1} stopColor="#C86F34" />
      </LinearGradient>
      <LinearGradient
        id="e"
        x1={9.06}
        x2={16.25}
        y1={5.911}
        y2={10.456}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FCCE38" />
        <Stop offset={0.215} stopColor="#FCD44F" />
        <Stop offset={0.505} stopColor="#FBDB67" />
        <Stop offset={0.774} stopColor="#FBDF75" />
        <Stop offset={1} stopColor="#FBE07A" />
      </LinearGradient>
      <LinearGradient
        id="f"
        x1={9.15}
        x2={11.33}
        y1={19.241}
        y2={7.538}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FCCE38" />
        <Stop offset={0.009} stopColor="#FCCD38" />
        <Stop offset={0.375} stopColor="#FBB53A" />
        <Stop offset={0.715} stopColor="#FBA73B" />
        <Stop offset={1} stopColor="#FBA23B" />
      </LinearGradient>
      <LinearGradient
        id="g"
        x1={15.917}
        x2={12.679}
        y1={15.007}
        y2={8.05}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FCCE38" />
        <Stop offset={0.009} stopColor="#FCCD38" />
        <Stop offset={0.375} stopColor="#FBB53A" />
        <Stop offset={0.715} stopColor="#FBA73B" />
        <Stop offset={1} stopColor="#FBA23B" />
      </LinearGradient>
      <LinearGradient
        id="i"
        x1={4.449}
        x2={5.977}
        y1={6.6}
        y2={13.052}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FCCE38" />
        <Stop offset={0.215} stopColor="#FCD44F" />
        <Stop offset={0.505} stopColor="#FBDB67" />
        <Stop offset={0.774} stopColor="#FBDF75" />
        <Stop offset={1} stopColor="#FBE07A" />
      </LinearGradient>
      <LinearGradient
        id="j"
        x1={5.447}
        x2={2.836}
        y1={5.617}
        y2={5.871}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FCCE38" />
        <Stop offset={0.215} stopColor="#FCD44F" />
        <Stop offset={0.505} stopColor="#FBDB67" />
        <Stop offset={0.774} stopColor="#FBDF75" />
        <Stop offset={1} stopColor="#FBE07A" />
      </LinearGradient>
      <LinearGradient
        id="k"
        x1={2.613}
        x2={4.452}
        y1={11.009}
        y2={4.161}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FCCE38" />
        <Stop offset={0.364} stopColor="#FCCE38" />
        <Stop offset={1} stopColor="#C86F34" />
      </LinearGradient>
      <LinearGradient
        id="l"
        x1={6.568}
        x2={3.395}
        y1={10.436}
        y2={8.43}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FCCE38" />
        <Stop offset={0.215} stopColor="#FCD44F" />
        <Stop offset={0.505} stopColor="#FBDB67" />
        <Stop offset={0.774} stopColor="#FBDF75" />
        <Stop offset={1} stopColor="#FBE07A" />
      </LinearGradient>
      <LinearGradient
        id="m"
        x1={6.528}
        x2={5.566}
        y1={4.554}
        y2={9.718}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FCCE38" />
        <Stop offset={0.009} stopColor="#FCCD38" />
        <Stop offset={0.375} stopColor="#FBB53A" />
        <Stop offset={0.715} stopColor="#FBA73B" />
        <Stop offset={1} stopColor="#FBA23B" />
      </LinearGradient>
      <LinearGradient
        id="n"
        x1={3.541}
        x2={4.971}
        y1={6.422}
        y2={9.493}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FCCE38" />
        <Stop offset={0.009} stopColor="#FCCD38" />
        <Stop offset={0.375} stopColor="#FBB53A" />
        <Stop offset={0.715} stopColor="#FBA73B" />
        <Stop offset={1} stopColor="#FBA23B" />
      </LinearGradient>
      <LinearGradient
        id="p"
        x1={20.172}
        x2={19.281}
        y1={8.457}
        y2={4.696}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FCCE38" />
        <Stop offset={0.215} stopColor="#FCD44F" />
        <Stop offset={0.505} stopColor="#FBDB67" />
        <Stop offset={0.774} stopColor="#FBDF75" />
        <Stop offset={1} stopColor="#FBE07A" />
      </LinearGradient>
      <LinearGradient
        id="q"
        x1={19.418}
        x2={21.458}
        y1={9.018}
        y2={8.819}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FCCE38" />
        <Stop offset={0.215} stopColor="#FCD44F" />
        <Stop offset={0.505} stopColor="#FBDB67" />
        <Stop offset={0.774} stopColor="#FBDF75" />
        <Stop offset={1} stopColor="#FBE07A" />
      </LinearGradient>
      <LinearGradient
        id="r"
        x1={18.475}
        x2={19.523}
        y1={9.608}
        y2={5.706}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FCCE38" />
        <Stop offset={0.364} stopColor="#FCCE38" />
        <Stop offset={1} stopColor="#C86F34" />
      </LinearGradient>
      <LinearGradient
        id="s"
        x1={18.52}
        x2={20.839}
        y1={6.122}
        y2={7.587}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FCCE38" />
        <Stop offset={0.215} stopColor="#FCD44F" />
        <Stop offset={0.505} stopColor="#FBDB67" />
        <Stop offset={0.774} stopColor="#FBDF75" />
        <Stop offset={1} stopColor="#FBE07A" />
      </LinearGradient>
      <LinearGradient
        id="t"
        x1={18.649}
        x2={19.2}
        y1={9.605}
        y2={6.648}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FCCE38" />
        <Stop offset={0.009} stopColor="#FCCD38" />
        <Stop offset={0.375} stopColor="#FBB53A" />
        <Stop offset={0.715} stopColor="#FBA73B" />
        <Stop offset={1} stopColor="#FBA23B" />
      </LinearGradient>
      <LinearGradient
        id="u"
        x1={20.985}
        x2={20.18}
        y1={8.485}
        y2={6.756}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FCCE38" />
        <Stop offset={0.009} stopColor="#FCCD38" />
        <Stop offset={0.375} stopColor="#FBB53A" />
        <Stop offset={0.715} stopColor="#FBA73B" />
        <Stop offset={1} stopColor="#FBA23B" />
      </LinearGradient>
      <LinearGradient
        id="w"
        x1={7.962}
        x2={9.017}
        y1={16.828}
        y2={21.285}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FCCE38" />
        <Stop offset={0.215} stopColor="#FCD44F" />
        <Stop offset={0.505} stopColor="#FBDB67" />
        <Stop offset={0.774} stopColor="#FBDF75" />
        <Stop offset={1} stopColor="#FBE07A" />
      </LinearGradient>
      <LinearGradient
        id="x"
        x1={8.651}
        x2={6.848}
        y1={16.149}
        y2={16.325}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FCCE38" />
        <Stop offset={0.215} stopColor="#FCD44F" />
        <Stop offset={0.505} stopColor="#FBDB67" />
        <Stop offset={0.774} stopColor="#FBDF75" />
        <Stop offset={1} stopColor="#FBE07A" />
      </LinearGradient>
      <LinearGradient
        id="y"
        x1={6.694}
        x2={7.964}
        y1={19.874}
        y2={15.144}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FCCE38" />
        <Stop offset={0.364} stopColor="#FCCE38" />
        <Stop offset={1} stopColor="#C86F34" />
      </LinearGradient>
      <LinearGradient
        id="z"
        x1={9.425}
        x2={7.233}
        y1={19.479}
        y2={18.093}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FCCE38" />
        <Stop offset={0.215} stopColor="#FCD44F" />
        <Stop offset={0.505} stopColor="#FBDB67" />
        <Stop offset={0.774} stopColor="#FBDF75" />
        <Stop offset={1} stopColor="#FBE07A" />
      </LinearGradient>
      <LinearGradient
        id="A"
        x1={9.398}
        x2={8.733}
        y1={15.415}
        y2={18.982}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FCCE38" />
        <Stop offset={0.009} stopColor="#FCCD38" />
        <Stop offset={0.375} stopColor="#FBB53A" />
        <Stop offset={0.715} stopColor="#FBA73B" />
        <Stop offset={1} stopColor="#FBA23B" />
      </LinearGradient>
      <LinearGradient
        id="B"
        x1={7.335}
        x2={8.322}
        y1={16.706}
        y2={18.826}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FCCE38" />
        <Stop offset={0.009} stopColor="#FCCD38" />
        <Stop offset={0.375} stopColor="#FBB53A" />
        <Stop offset={0.715} stopColor="#FBA73B" />
        <Stop offset={1} stopColor="#FBA23B" />
      </LinearGradient>
      <RadialGradient
        id="a"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="rotate(45.001 -7.858 21.989) scale(4.21582 4.21593)"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FFBC47" />
        <Stop offset={0.259} stopColor="#FEC14D" stopOpacity={0.741} />
        <Stop offset={0.621} stopColor="#FDCD60" stopOpacity={0.379} />
        <Stop offset={1} stopColor="#FBE07A" stopOpacity={0} />
      </RadialGradient>
      <RadialGradient
        id="h"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="rotate(-134.999 3.965 2.897) scale(1.86038)"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FFBC47" />
        <Stop offset={0.259} stopColor="#FEC14D" stopOpacity={0.741} />
        <Stop offset={0.621} stopColor="#FDCD60" stopOpacity={0.379} />
        <Stop offset={1} stopColor="#FBE07A" stopOpacity={0} />
      </RadialGradient>
      <RadialGradient
        id="o"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="rotate(45.002 .61 28.052) scale(1.44556)"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FFBC47" />
        <Stop offset={0.259} stopColor="#FEC14D" stopOpacity={0.741} />
        <Stop offset={0.621} stopColor="#FDCD60" stopOpacity={0.379} />
        <Stop offset={1} stopColor="#FBE07A" stopOpacity={0} />
      </RadialGradient>
      <RadialGradient
        id="v"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="rotate(-134.998 7.725 7.123) scale(1.28503)"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FFBC47" />
        <Stop offset={0.259} stopColor="#FEC14D" stopOpacity={0.741} />
        <Stop offset={0.621} stopColor="#FDCD60" stopOpacity={0.379} />
        <Stop offset={1} stopColor="#FBE07A" stopOpacity={0} />
      </RadialGradient>
    </Defs>
  </Svg>
)
export default SparkleIcon
