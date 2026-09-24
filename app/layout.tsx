import {
  slabo,
  athelasRegular,
  galaxiePolarisLight,
  galaxiePolarisMedium,
  galaxiePolarisBold
} from "@/fonts";

import Script from "next/script";
import "./globals.css";
import type { Viewport } from "next";

export function generateViewport(): Viewport {
  return {
    themeColor: "#343437",
  };
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${slabo.variable} ${athelasRegular.variable} ${galaxiePolarisLight.variable} ${galaxiePolarisMedium.variable} ${galaxiePolarisBold.variable} scroll-smooth`}>
      <head>
        {/* Google Analytics - UA */}
         <Script
          src="https://www.googletagmanager.com/gtag/js?id=UA-102870459-7"
          strategy="afterInteractive"
        />

        <Script id="google-tags">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'UA-102870459-7');
            gtag('config', 'AW-10845221618');
          `}
        </Script>

        {/* Clmbtech Pixel */}
        <Script id="clmbtech-pixel">
          {`
            !function(px){
              function e(t,e,c){
                var n="",r="";
                try{
                  ""!=(n=function(t,e){
                    try{
                      var c={};
                      e.replace(/[?&]+([^=&]*)/gi,function(t,e,n){
                        c[e]=n
                      });
                      return c.hasOwnProperty(t)?c[t]:""
                    }catch(t){
                      return ""
                    }
                  }(t,c))
                  ? function(t,e,c){
                      try{
                        var n,r;
                        c
                          ? ((n=new Date).setTime(n.getTime()+864e5),
                            r="; expires="+n.toGMTString())
                          : r="";
                        document.cookie=t+"="+e+r+";Path=/"
                      }catch(t){}
                    }(e,n,1)
                  : n=function(t){
                      try{
                        var e=document.cookie.match(new RegExp("(^| )"+t+"=([^;]+)"));
                        if(e)return e[2]
                      }catch(t){}
                      return null
                    }(e);

                  r=n!=""&&n!=null?"&"+t+"="+n:"&"+t+"=";
                }catch(t){}

                return r;
              }

              var c="",n="",r="";

              try{
                n=e("ad","acf",c=window.location.href);
                r=e("col_ci","col_ci",c);
              }catch(t){
                console.log(t);
              }

              var a=
                "https://ade.clmbtech.com/cde/eventTracking.htm?pixelId="
                +px+
                "&_w=1&_t=2"+
                n+
                r+
                "&rd="+(new Date).getTime();

              (new Image).src=a;
            }('8721');
          `}
        </Script>

        {/* InMobi DSP Pixel */}
        <Script id="inmobi-dsp-pixel">
          {`
            !function(e,n,advt_guid,page_view,event_id,event_value){
              var a=n.getElementsByTagName("head")[0],
                  s=n.createElement("script");

              s.async=!0;
              s.src="https://i.l-dsp.inmobicdn.net/helix-cors/custom/js/idspPixel/v5/min.pixel.js";
              s.id=advt_guid.concat("*",page_view,"*",event_id,"*",event_value);

              a.parentNode.insertBefore(s,a);
            }(
              window,
              document,
              advt_guid="7a14ee43dedc461293b659ceb2f91d98",
              page_view=true,
              event_id="",
              event_value=""
            );
          `}
        </Script>

        {/* GA Connector */}
        <Script
          src="https://track.gaconnector.com/gaconnector.js"
          type="text/javascript"
          strategy="afterInteractive"
        />

        <Script id="ga-connector">
          {`
            if (typeof gaconnector2 !== "undefined") {
              gaconnector2.track("19aa3177ca2bb4364523ad62a9d02338");
            }
          `}
        </Script>

        {/* Clmbtech Pixel - 14465 */}
        <Script id="clmbtech-pixel-14465">
          {`
            !function(px){
              function e(t,e,c){
                var n="",r="";
                try{
                  ""!=(n=function(t,e){
                    try{
                      var c={};
                      e.replace(/[?&]+([^=&]*)/gi,function(t,e,n){
                        c[e]=n
                      });
                      return c.hasOwnProperty(t)?c[t]:""
                    }catch(t){
                      return ""
                    }
                  }(t,c))
                  ? function(t,e,c){
                      try{
                        var n,r;
                        c
                          ? ((n=new Date).setTime(n.getTime()+864e5),
                            r="; expires="+n.toGMTString())
                          : r="";
                        document.cookie=t+"="+e+r+";Path=/"
                      }catch(t){}
                    }(e,n,1)
                  : n=function(t){
                      try{
                        var e=document.cookie.match(new RegExp("(^| )"+t+"=([^;]+)"));
                        if(e)return e[2]
                      }catch(t){}
                      return null
                    }(e);

                  r=n!=""&&n!=null?"&"+t+"="+n:"&"+t+"=";
                }catch(t){}

                return r;
              }

              var c="",n="",r="";

              try{
                n=e("ad","acf",c=window.location.href);
                r=e("col_ci","col_ci",c);
              }catch(t){
                console.log(t);
              }

              var a=
                "https://ade.clmbtech.com/cde/eventTracking.htm?pixelId="
                +px+
                "&_w=1&_t=2"+
                n+
                r+
                "&rd="+(new Date).getTime();

              (new Image).src=a;
            }('14465');
          `}
        </Script>
      </head>
      <body className="font-slabo">{children}</body>
    </html>
  );
}
