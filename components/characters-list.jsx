import { Card, CardBody, CardFooter } from '@nextui-org/card'
import { Image } from '@nextui-org/image'

export const CharactersList = ({ items }) => {
  const { sortElements } = items
  const classColor = {
    deathknight: 'bg-red-700',
    druid: 'bg-amber-400',
    hunter: 'bg-green-400',
    mage: 'bg-blue-400',
    paladin: 'bg-pink-400',
    priest: 'bg-gray-500',
    rogue: 'bg-yellow-400',
    shaman: 'bg-blue-800',
    warlock: 'bg-purple-400',
    warrior: 'bg-amber-950'
  }
  return (
        <>
        { sortElements.map((item, index) => (
                <div className="gap-2 grid  grid-cols-10" key={item.name + index}>
                    <Card shadow="sm" className="col-span-3 md:col-span-1 mb-2">
                      <CardBody className="overflow-visible p-0 align-bottom">
                        <Image
                            shadow="sm"
                            radius="lg"

                            alt={item.name}
                            className="w-fulls object-cover h-full z-0"
                            src={`/images/${item.c}.jpg`}
                        />
                        <div className="absolute bottom-4 left-0 bg-g a z-10 ps-2">
                          <b className="text-gray-400 inline-block text-xs">{item.class}</b>
                        </div>
                        <div className="absolute bottom-0 left-0 bg-g a z-10 ps-2">
                          <b className="">{item.name}</b>
                        </div>
                        <div className="absolute bottom-0 right-0 bg-g a z-10 ps-2">
                          <b className="">{index + 1}</b>
                        </div>
                      </CardBody>
                      {/* <CardFooter className="text-small justify-between"> */}
                      {/*    <b>{item.name}</b> */}
                      {/*    <p className="text-default-500">{index + 1}</p> */}
                        {/* </CardFooter> */}
                    </Card>
                    <Card shadow="sm" isPressable className="col-span-4 md:col-span-9 mb-2">
                        <CardBody className="overflow-visible p-0">
                            <div className={`absolute col-span-6 justify-self-start ${classColor[item.c]} bg-opacity-25 h-full z-10`}
                                 style={{ width: `${item.v}` }}></div>
                            <div
                                className="flex grid-cols-12 gap-6 md:gap-4 items-center justify-around">
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
                                 <div className="relative col-span-12 md:col-span-8 justify-center items-center p-5 mt-4">
                                    <p className="text-2xl md:text-5xl ">{item.events[0].ups}</p>
                                 </div>
                                 <div className="relative col-span-12 md:col-span-4 justify-end items-center me-4 mt-4">
                                    <p className="text-2xl md:text-5xl">{item.events[0].porciento}%</p>
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
