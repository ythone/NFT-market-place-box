import React from 'react'
import CardIemSuscribe from './CardIemSuscribe'
import useMediaQuery from '../../hooks/useMediaQuery';

const StackCard = () => {
    const isAboveMediumScreens = useMediaQuery('(min-width: 760px)');

    const display_card_according_to_screen = () => {
        if (isAboveMediumScreens) {
            return (
                <section className="h-96 w-96">
                    <div className="z-20 absolute transform translate-y-16 rounded-lg bg-green-500">
                        <CardIemSuscribe
                            descr_left_1="Monument Blend"
                            descr_right_1="123ETH"
                            main_img_url="https://i.seadn.io/gae/uYz2PU0XdMvs9p1UyaPOu5V8WEwXyttlvt3uNmYriTnzvZ1tbOtdjk_7BHo-SSsgODTxSQqrnAfrrZica2tmkM5TmSeB8rHtlv9YKQ?auto=format&w=384"
                            transaction_hour="1h 3m 34s"
                        /></div>
                    <div className="z-0 absolute transform translate-x-32 rounded-lg bg-purple-500">
                        <CardIemSuscribe
                            descr_left_1="Monument Blend"
                            descr_right_1="123ETH"
                            main_img_url="https://i.seadn.io/gae/f3siDybEsFYyFJdz2cOo3z5LrlPaSDBi8LWRiq9ZLAwfd1XReVT5dlihZ0nhmu2YXtuQaCl1CJ_0aj2ixp8ebFMeBnRDeph5U3Za6Q?auto=format&w=384"
                            transaction_hour="1h 3m 34s"
                        />
                    </div>
                    <div className="z-40 absolute transform -translate-x-8 -translate-y-16 rounded-lg bg-pink-500">
                        <CardIemSuscribe
                            descr_left_1="Monument Blend"
                            descr_right_1="123ETH"
                            main_img_url="https://i.seadn.io/gae/IAuqZlF2AUBZuXzd4xQgSTe4x92piw0lWxc5cbFVfkVs6wHS3VcNUcj2bohuC_azD7JRxn54l2asSrNKvrv1flvUGL8kh9qEf828hQ?auto=format&w=384"
                            transaction_hour="1h 3m 34s"
                        />
                    </div>
                </section>
            )
        }

        return (
            <section className="h-48 w-48 ">
                <div className="md:z-20 absolute transform translate-y-16 rounded-lg bg-green-500">
                    <CardIemSuscribe
                        descr_left_1="Monument Blend"
                        descr_right_1="123ETH"
                        main_img_url="https://i.seadn.io/gae/uYz2PU0XdMvs9p1UyaPOu5V8WEwXyttlvt3uNmYriTnzvZ1tbOtdjk_7BHo-SSsgODTxSQqrnAfrrZica2tmkM5TmSeB8rHtlv9YKQ?auto=format&w=384"
                        transaction_hour="1h 3m 34s"
                    /></div>
                <div className="md:z-0 absolute transform translate-x-32 rounded-lg bg-purple-500">
                    <CardIemSuscribe
                        descr_left_1="Monument Blend"
                        descr_right_1="123ETH"
                        main_img_url="https://i.seadn.io/gae/f3siDybEsFYyFJdz2cOo3z5LrlPaSDBi8LWRiq9ZLAwfd1XReVT5dlihZ0nhmu2YXtuQaCl1CJ_0aj2ixp8ebFMeBnRDeph5U3Za6Q?auto=format&w=384"
                        transaction_hour="1h 3m 34s"
                    />
                </div>
                <div className="md:z-50 absolute transform -translate-x-8 -translate-y-16 rounded-lg bg-pink-500">
                    <CardIemSuscribe
                        descr_left_1="Monument Blend"
                        descr_right_1="123ETH"
                        main_img_url="https://i.seadn.io/gae/IAuqZlF2AUBZuXzd4xQgSTe4x92piw0lWxc5cbFVfkVs6wHS3VcNUcj2bohuC_azD7JRxn54l2asSrNKvrv1flvUGL8kh9qEf828hQ?auto=format&w=384"
                        transaction_hour="1h 3m 34s"
                    />
                </div>
            </section>
        )
    }

    return (
      display_card_according_to_screen()
    )
}

export default StackCard