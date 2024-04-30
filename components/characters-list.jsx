import { Card, CardBody, CardFooter } from '@nextui-org/card'
import { Image } from '@nextui-org/image'

export const CharactersList = ({ items }) => {
  const { sortElements } = items
  const classColor = {
    deathknight: { bg: 'bg-red-700', text: 'text-red-700' },
    druid: { bg: 'bg-amber-400', text: 'text-amber-400' },
    hunter: { bg: 'bg-green-400', text: 'text-green-400' },
    mage: { bg: 'bg-blue-400', text: 'text-blue-600' },
    paladin: { bg: 'bg-pink-400', text: 'text-pink-400' },
    priest: { bg: 'bg-gray-500', text: 'text-gray-500' },
    rogue: { bg: 'bg-yellow-400', text: 'text-yellow-400' },
    shaman: { bg: 'bg-blue-800', text: 'text-blue-800' },
    warlock: { bg: 'bg-purple-400', text: 'text-purple-400' },
    warrior: { bg: 'bg-amber-950', text: 'text-amber-950' }
  }
  return (
        <>
        { sortElements.map((item, index) => (
                <div className="gap-2 grid grid-cols-12" key={item.name + index}>
                    <Card shadow="sm" className="col-span-1 md:col-span-1 lg:col-span-1 mb-2 me-2 md:me-4">
                      <CardBody className="overflow-visible p-0 align-bottom">
                         <Image
                            shadow="sm"
                            radius="lg"

                            alt={item.name}
                            className="w-[100px] object-cover h-[65px] z-0 bg-gray-800"
                            src={`/other/${item.c}.svg`}
                         />
                        {/* <div className="absolute bottom-4 left-0 bg-g a z-10 ps-2"> */}
                        {/*  <b className="text-gray-400 inline-block text-xs">{item.class}</b> */}
                        {/* </div> */}
                        {/* <div className={'absolute top-0 left-0 bg-g a z-10 ps-2 text-gray-200'}> */}
                        {/*  <b className="">{item.class}</b> */}
                        {/* </div> */}
                        {/* <div className="absolute bottom-0 left-0 bg-g a z-10 ps-2"> */}
                        {/*  <b className="text-white text-2xl">{index + 1}</b> */}
                        {/* </div> */}
                      </CardBody>
                      {/* <CardFooter className="text-small justify-between"> */}
                      {/*    <b>{item.name}</b> */}
                      {/*    <p className="text-default-500">{index + 1}</p> */}
                        {/* </CardFooter> */}
                    </Card>
                    <Card shadow="sm" isPressable className="col-span-9 md:col-span-10 lg:col-span-11 ms-0 mb-2">
                        <CardBody className="overflow-visible p-0">
                            <div className={'absolute col-span-6 justify-self-start bg-gray-800 bg-opacity-40 h-full z-10 rounded-r-2xl'}
                                 style={{ width: `${item.v}` }}></div>
                            <div
                                className={`flex grid-cols-12 gap-6 md:gap-4 ${classColor[item.c].bg} bg-opacity-25 h-full items-center justify-between`}>
                                {/* <div className="absolute col-span-2 md:col-span-2"> */}
                                {/*	<Image */}
                                {/*		shadow="sm" */}
                                {/*		radius="lg" */}
                                {/*		width="100%" */}
                                {/*		alt={item.title} */}
                                {/*		className="w-full object-cover h-[200px]" */}
                                {/*		src="https://nextui.org/images/hero-card.jpeg" */}
                                {/*	/> */}

                                {/* </div> */}
                                 <div className="relative col-span-12 md:col-span-8 justify-center items-center ps-2 md:ps-4">
                                    <b className="text-xs md:text-3xl ">{index + 1}: {item.name}</b>
                                 </div>
                              <div className="relative col-span-12 md:col-span-4 justify-end items-center pe-2 md:pe-6">
                                 <b className="text-xs md:text-3xl">{item.damage_done.toFixed(2) }({(item.damage_done / item.active_time).toFixed(2)})</b>
                                {/* <p className="text-2xl md:text-5xl ">{item.events[0].u_medida}({(item.events[0].ups / 1000).toFixed(2)})</p> */}
                              </div>
                            </div>
                        </CardBody>
                      {/* <CardFooter className="text-small justify-end"> */}

                        {/*	<p className="text-default-500">{item.price}</p> */}
                        {/* </CardFooter> */}
                    </Card>
                </div>
        ))}
        </>
  )
}
