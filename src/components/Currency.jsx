import { IoMdFootball } from 'react-icons/io'
import { RiMoneyDollarCircleFill } from 'react-icons/ri'

function Currency({ text, type }) {
  const icons = [
    <RiMoneyDollarCircleFill className='text-green-300 text-2xl' />,
    <IoMdFootball className='text-yellow-300 text-2xl' />,
  ]

  return (
    <div className='relative'>
      <svg
        className='absolute w-28 -left-8 -top-8'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 150 80'
        width='150'
        height='80'
        preserveAspectRatio='xMidYMid meet'
      >
        <defs>
          <clipPath id='__lottie_element_145'>
            <rect
              width='150'
              height='80'
              x='0'
              y='0'
            ></rect>
          </clipPath>
          <image xlink:href='data:;base64,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' />
          <mask
            id='__lottie_element_152'
            mask-type='luminance'
          >
            <g
              transform='matrix(1.9016200304031372,0,0,3.6199300289154053,17.77172088623047,119.1876449584961)'
              opacity='1'
              style={{ display: 'block' }}
            >
              <g
                opacity='1'
                transform='matrix(1,0,0,1,38.5,-21)'
              >
                <path
                  fill='url(#gradient_1)'
                  fill-opacity='1'
                  d=' M28,-11.625 C28,-11.625 28,11.625 28,11.625 C28,11.625 -28,11.625 -28,11.625 C-28,11.625 -28,-11.625 -28,-11.625 C-28,-11.625 28,-11.625 28,-11.625z'
                ></path>
              </g>
              <g
                opacity='1'
                transform='matrix(1,0,0,1,0,0)'
              >
                <path
                  fill='url(#gradient_2)'
                  fill-opacity='1'
                  d=' M12.14900016784668,-37.7599983215332 C12.14900016784668,-37.7599983215332 -41.15999984741211,-6.578000068664551 -41.15999984741211,-6.578000068664551 C-41.15999984741211,-6.578000068664551 5.839000225067139,-5.4730000495910645 5.839000225067139,-5.4730000495910645 C5.839000225067139,-5.4730000495910645 11.821000099182129,-13.312000274658203 11.821000099182129,-13.312000274658203 C11.821000099182129,-13.312000274658203 12.14900016784668,-37.7599983215332 12.14900016784668,-37.7599983215332z'
                ></path>
              </g>
            </g>
          </mask>
          <linearGradient
            id='gradient_1'
            spreadMethod='pad'
            gradientUnits='userSpaceOnUse'
            x1='0'
            y1='0'
            x2='100'
            y2='0'
          >
            <stop
              offset='0%'
              stop-color='rgb(255,255,255)'
            ></stop>
            <stop
              offset='6%'
              stop-color='rgb(128,128,128)'
            ></stop>
            <stop
              offset='16%'
              stop-color='rgb(0,0,0)'
            ></stop>
            <stop
              offset='58%'
              stop-color='rgb(0,0,0)'
            ></stop>
            <stop
              offset='100%'
              stop-color='rgb(0,0,0)'
            ></stop>
          </linearGradient>
          <linearGradient
            id='gradient_2'
            spreadMethod='pad'
            gradientUnits='userSpaceOnUse'
            x1='10'
            y1='0'
            x2='115'
            y2='-94'
          >
            <stop
              offset='0%'
              stop-color='rgb(0,0,0)'
            ></stop>
            <stop
              offset='4%'
              stop-color='rgb(128,128,128)'
            ></stop>
            <stop
              offset='9%'
              stop-color='rgb(255,255,255)'
            ></stop>
            <stop
              offset='19%'
              stop-color='rgb(255,255,255)'
            ></stop>
            <stop
              offset='28%'
              stop-color='rgb(255,255,255)'
            ></stop>
          </linearGradient>
          <mask
            id='__lottie_element_160'
            mask-type='luminance'
          >
            <g
              transform='matrix(1.9016200304031372,0,0,3.6199300289154053,17.77172088623047,119.1876449584961)'
              opacity='1'
              style={{ display: 'block' }}
            >
              <g
                opacity='1'
                transform='matrix(1.2282999753952026,0,0,1,45.79600143432617,-20.86199951171875)'
              >
                <path
                  fill='url(#__lottie_element_163)'
                  fill-opacity='1'
                  d=' M28,-11.625 C28,-11.625 28,11.625 28,11.625 C28,11.625 -28,11.625 -28,11.625 C-28,11.625 -28,-11.625 -28,-11.625 C-28,-11.625 28,-11.625 28,-11.625z'
                ></path>
              </g>
              <g
                opacity='1'
                transform='matrix(1,0,0,1,0,0)'
              >
                <path
                  fill='url(#__lottie_element_164)'
                  fill-opacity='1'
                  d=' M12.14900016784668,-37.7599983215332 C12.14900016784668,-37.7599983215332 -41.15999984741211,-6.578000068664551 -41.15999984741211,-6.578000068664551 C-41.15999984741211,-6.578000068664551 5.839000225067139,-5.4730000495910645 5.839000225067139,-5.4730000495910645 C5.839000225067139,-5.4730000495910645 11.821000099182129,-13.312000274658203 11.821000099182129,-13.312000274658203 C11.821000099182129,-13.312000274658203 12.14900016784668,-37.7599983215332 12.14900016784668,-37.7599983215332z'
                ></path>
              </g>
            </g>
          </mask>
          <linearGradient
            id='__lottie_element_163'
            spreadMethod='pad'
            gradientUnits='userSpaceOnUse'
            x1='0.43799999356269836'
            y1='0'
            x2='100'
            y2='0'
          >
            <stop
              offset='0%'
              stop-color='rgb(255,255,255)'
            ></stop>
            <stop
              offset='6%'
              stop-color='rgb(128,128,128)'
            ></stop>
            <stop
              offset='16%'
              stop-color='rgb(0,0,0)'
            ></stop>
            <stop
              offset='58%'
              stop-color='rgb(0,0,0)'
            ></stop>
            <stop
              offset='100%'
              stop-color='rgb(0,0,0)'
            ></stop>
          </linearGradient>
          <linearGradient
            id='__lottie_element_164'
            spreadMethod='pad'
            gradientUnits='userSpaceOnUse'
            x1='10'
            y1='0'
            x2='115'
            y2='-94'
          >
            <stop
              offset='0%'
              stop-color='rgb(0,0,0)'
            ></stop>
            <stop
              offset='4%'
              stop-color='rgb(128,128,128)'
            ></stop>
            <stop
              offset='9%'
              stop-color='rgb(255,255,255)'
            ></stop>
            <stop
              offset='19%'
              stop-color='rgb(255,255,255)'
            ></stop>
            <stop
              offset='28%'
              stop-color='rgb(255,255,255)'
            ></stop>
          </linearGradient>
        </defs>
        <g clip-path='url(#__lottie_element_145)'>
          <g
            className='png'
            style={{ display: 'none' }}
            transform='matrix(1,0,0,1,0,0)'
            opacity='0.001041666666668135'
          >
            <image
              width='150px'
              height='80px'
              preserveAspectRatio='xMidYMid slice'
              xlink:href='data:;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAABQCAYAAAD7sIxLAAAMVklEQVR42u3db28bx3oF8N/sLklJtGXL/2LdpvVF0ReFv0+/Qr+Gcb+kgQJtb9MUsSPZoi2Jkkju7vTFDimKoizZjmMlmhMEoKnlcnf28Mwz53lmhoyMjIyMjIyMjIyMjIyMjIzfFOHWXVGM4U/Vwn/7jdr4lXj1UwwxE+s6Ii0/iJdLr19/o2vd/U5tsHPD7x0tEepNev1S9Dq9XiXcLSFZuBWEmpPppeC14KXCW8F9wUgwFBwKtpaud+MLr338hZ8bfMHnTr7gM8vfMxFtiSaioehAq9TaEQ21XmsXJFsm2C0gV/iupFom1Eihr/ROaaBUKZVKhdKZUlQo0/HVDa57ds0x5TV/r7/i819z7vlnm0SUoNVqtBqlWqV2otZX21KbapKStbeJXOG7kmpOqIlCqSfoiQYqfdFArS/oKVVqpUqx9pzNFfdRrHm/veLYcMX7644vPuMc7Wdc2+p9BK2oUZlpTQUTwUTjTOPMwNTY1I8aNBeU604Rax2pxipDfbVNlaHonsZQsCXaxAA9QXnhwcXlX+fKfXwOeeKa98IN32tveNyXfkfUiGrBVHSmMNYaKx0JjhWOtc6MTQ3VdrS3hVzVdxkldUF5icq2DRNDrYdaj7GDByRyzYlFgSCm/8ISseJXPMDwic+6QOQvJ0q4AdFcuKNzDSvUiVSnoiN81Bgp9bRoRQ+0xolU3Irgvfrd1WquVFRmNk1tKzxR2hU9xxOFB6IhNtBPJCxSo0VBu9KAVz/A+BlKfVV3GC91Udef66rvDp/oJS4rciuapTD+BEcYYTOF8S1qUW2gsatNo814N4i13AXuKtAzs5kI9Bz/iH/CX/BI675gc4VUc91oFwS7rou/vqNf7Xq+LmRYp4RXtsnaLnNdZ1trTQSngqPULpVWqzTROhWdqU09dd7Or74vuX4/xepGgN3I79RAtK3wg9Zf8c94gWfYXpAqqMQLpIpoPqlFfxTchKpzRSr0RGW64xqnuEcKFWqVJlk0B3dFsZa7QApv9THU91jrR/wVL0R/ETxMjdUp1TKponYxboqLwfjnPsyvb/D4O50jLLr8Jt1vI6gTsWrF4r1Wfft+ZNXvpla7Cod6HtpUe6j1A/4hdX/PhBSwn3d/YUGokBq1izfqpFrtF5Pn+gf7bf9eXPP38+tr0v1OBCeCQ4y0DgQj0ZHSqdrMROOF6Lno9Z+dWMtqNVYa6mvdEz3WJVN2tZ4KqfuLafTXkalNVmIXvHaNeyaYYqbVriVRvObhhivGZJ8iW/zEuT6PWPGKv8a1546aZPVOROOl4P093olGZsYGpu5rvE7x56u70BXO1apWKWyJdgQ/pKB9rlRbor6oELQKNWaiM8FpatRjwVjrVDBVaC898JsQIF7zMNeR6ioixht+/qaKFVdMDQsf60x0KjpOqvURHwSHNpwZqb1YpHf+5F3hqlrNDBTuqz1ReC76QbCTgtCBzouOqcs7wwmORR8FH0QfRIepS5imX/OnCVXc8EHHNUryNSS5aN5+3vniIpUTk/NeY5rU+hQnWmMzJwqnJqYG6ktq9Z2d9+qbq9VLpVYvOek7eJZI9Uh0XzQQlKkx56Q6Tr/K96J97IsOcJgadpaULS4eXryig2lvQLqw5kHHNceGS6O2eCnSK69QuKuuo/1EtxnSN9Rm+maYqU2VJgoz40Sqwe1Sq29HrBjDwl74P6XKhp4HKZ76AU/wQLQp6KWH1iyR6gB7gjeiX0R7CgeCY8FErVbdcGx4lZo1qFZLTtYet6yNl9G75hquG7EF1t5Hm87d0yq0TrW2Uk6w1qRgvVlb4XALqhu+nWLN7YWRvtZwoVY8FT1MxTD91LRtSrKOcSB6I/hf/Cz6ReWdxpHCJGX3W9MUmV2Hcun1ZOX42Q3vZfgVwXD9mdc4x4lokl5vi+rkZG1rjUT7C1+vU6pXt8tyqL6hWgW7KoWNlM16KngmeiwsusAiacpMMBaN8Ebwd/y36Ge8UznSmNpQG2ptu1gAd1MMvvCefv6OD+1l+u6d9O/XS9fyb7ezyO+3J9ZywP5W6UTfwFD0SPBMSF1gZ4L2klp1ox4+Ct6KftL6L5X/EewZOHbfJAWn5xHNqz+48/5b4BaWJH8qqvh6tdpVOtS3bdvMrtK/iP5Vl7p5ntI5gxRLTFJ96BvR30X/IfhPjTcKhyoTbzS3KX7I+D0V66JaFYb6onsqj8XUBbKtSEZoXKjVBIda7wVvBW81DvSN7Zii9e+ZVHeXWMtmaJnshcZDwVM8TfbCPVFfkdz1zgQ9EXwU7GNP40BlbGzqzVJ5TCbVHwrFb65WfaWYzNAupprHVtuCjTSIDmnAfyY40qUo9gT7+j6aOUvltl0ddybVHSXWXK1GigtmaExq1U12mieYixSETzHGSLCf/h/hRG2WgvWMO0usZTN0rFKnWqsmqVX0ODnsG0tdb40zHAlJraJ3pilYH6qzWuUYa+63FN7qmRmmHOAzRTJDz+2FItUQTRe+VZtSNsHIlhOFmZ2lgD3jDhJrWa1GKr1khs4D9rlaBRuCKgXiXQVkdCh6hz2ld2aOTExVGj/lgP3uEmvVDO2C8nuCR6kLfLooiZkH7FGjMNUuxVbsa3xYFKw9zWqVFWueuhmqlIvJEav2wkChNE/dRCcKH3WFanuC96JjY1NjjYOsVneXWKtqVSUztDNBO3uh9SBNirhohgbHogMh2QvRR1NnBmovxEv5r4w7pljLZmhjU89DzcJeeJTshYFiKdHczY3r1KobCXalMFum3mS1utt2w6oZOtBXur+wF4Ingm1siqoUW3X2Qkj2QrSnta9NZuhOthcyseZqNTdDT2xhR+GpIpmhMZmhXWVol7rpKow+LEaC0UjPOJuhmVjrzdC+7UXqpoux7rNihoaFWh0s7IWQzdAcY61iboa6lLp5yJrUTTRO6Zo9XU5wlEaH2Qy984q1Wsfes2G6sBee4bFoO6lVmWalzFId+7wsZl/0TutIMDFNazrlgP2OKtbqNPmRvqmh0qMl3+rcXqDQJjM0OsZIYU+wp/RB60STzdBMrHnAvlzHXiypVee2d4nmi2boaZpg2QXstfd6yQzdXqznlNXqThJrXR37VjJDL9axr5qhU93s5YOFvVD44MSpQVp9LqvVHVesuRk6Udm2qfFQuUg0PzKfzbxshnb2wnnqpnSgNFZmMzQTa3Wa/I6BM/eFpFZtMkODDa3KfNZNN4PvYq1V9FGbzNCdlLrJpLrDinVxUY9NXTXosxRfzc3QwVId+5SUaG69SwH7gZmxeqWOPeMO2g3r6thb26qUaObxYvkhKXXTLYzWVYa2S2pVODTMdeyZWBdHgt2iHj1D7GiW1CosVt9bNkNPzGutSnukNZwKM5bmB2bcwa5w/aIeXeomeqa4UMdepkXCatEpDi/EVoVDbTJDc2VojrGuXNTjvNbqXK06M3RCqmMP9rX2tD7YcKpMay5ke+EOE2t1UY82zbrp1KqrtVpdLM2SWhXJDA3eqxwZmdjOapWJda5YhbdpJBhsix4pPEx17V0XiEWt1fK6VlLqJpuhmVhrfKtCoadnU+N+SjDPSVUtzWaeTzz9QJom3zpQ5crQTKzLI8FgqLSlp7WZ4qlN0cD5xmd1GgmOWTjsv2pTHfuqGZqRu0K7gkrhTE+jn5YcqlikbOqFWsVFDfuvqQs8MEuJ5ryox51FsXY0uCOoFaJCpVjaI6Zbd7yrsRqLPiq8E/yKt4J9hUNMshmaFesy3qa9IDaWCNUtgX2q2/y2W8S/K4n5VfQL3modaI3dN8117JlYn9KzNtVVnSVCHaaOrdBtFDQSvcEvCvsKR+pkhma1ysS6MCKco9SaqgWnSoe61YxL3cL+MS3qcaBIsdXUB4NcGZqxSqwQ4oJcz0U/aWybmi5yf6VoikFa+XycFGtk5sNiFb7DbC9krOsKX6f9HF5oHJmmuX+UmrQHcaVUa5ziWGmscWqQ9iX+MdsLGVfFWC9FI406LbE/SAv8zxzpp9xga6pvqjJJ9sP5ZtdZre48VrauXdpil8JuqsV6p7StMktELLRqjYHaRGOgvU07qGfc7lFht3H1CC+0xsnDonOwqrSg/4F4G/dyybhNirU6Oux27wop9gp20+s3iUzzmGy5eC+TKsNVO1OsWg9/u+K4V7d3L5eM20isdeT65FkyoTJuSqxPES0TKSMjIyMjIyMjIyMjIyMjIyMjI+NPgP8H7PRCyVYYvVwAAAAASUVORK5CYII='
            />
          </g>
          <g
            mask='url(#__lottie_element_152)'
            style={{ display: 'block' }}
          >
            <g
              transform='matrix(1,0,0,1,75,40)'
              opacity='1'
            >
              <g
                opacity='1'
                transform='matrix(1,0,0,1,0,0)'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  fill-opacity='0'
                  className={type === 0 ? 'stroke-green-300' : 'stroke-yellow-300'}
                  stroke-opacity='1'
                  stroke-width='2'
                  d=' M-63.25,23.25 C-63.25,23.25 -38,-22.5 -38,-22.5 C-38,-22.5 53.5,-23 53.5,-23'
                ></path>
              </g>
            </g>
          </g>
          <g
            mask='url(#__lottie_element_160)'
            style={{ display: 'block' }}
          >
            <g
              transform='matrix(1,0,0,1,75,40)'
              opacity='1'
            >
              <g
                opacity='1'
                transform='matrix(1,0,0,1,0,0)'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  fill-opacity='0'
                  stroke='rgb(207,235,255)'
                  stroke-opacity='1'
                  stroke-width='2'
                  d='M0 0'
                ></path>
              </g>
            </g>
          </g>
        </g>
      </svg>
      <div className='flex gap-2 items-center'>
        {icons[type]}
        <p className='font-semibold text-lg'>{text}</p>
      </div>
    </div>
  )
}

export default Currency
