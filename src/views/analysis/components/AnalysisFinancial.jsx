import React from 'react'
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts';
import { FiChevronRight } from 'react-icons/fi';
import { MdLockOutline } from 'react-icons/md';
import { GoTriangleDown } from 'react-icons/go';

export const AnalysisFinancial = () => {
    const option = {
        xAxis: {
            type: 'category',
            data: ['2024', '2023', '2022', '2021', '2020', '2019', '2018', '2017']
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                formatter: '{value}%'
            },
            max: 2,
            min: 0,
        },
        // legned: {
        //     bottom: "5%",
        //     left: "center",
        // },
        tooltip: {
            trigger: 'axis',
            formatter: '{b}: {c}%',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#283b56'
                }
            }
        },
        legend: {
            show: true,
            bottom: "2%",
            left: "center",
            // rounded full
            itemWidth: 15,
            itemHeight: 15,
        },
        toolbox: {
            show: true,
            feature: {
                dataView: { readOnly: false },
                restore: {},
                saveAsImage: {}
            }
        },
        series: [
            {
                name: 'ເງິນປັນຜົນ/ຫຸ້ນ',
                // realtimeSort: true,
                stack: 'Min Max',
                data: [1.8, 0.7, 1.5, 1, 1.6, 0.3, 2, 1.5],
                type: 'bar',
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 1, color: '#FFF599' },
                        { offset: 0.6, color: '#FB923C' },
                    ])
                },
                label: {
                    show: true,
                    position: 'top',
                    formatter: '{c}%',
                    fontSize: 12,
                    distance: 5,
                    valueAnimation: true
                },
            }
        ],
        animationDuration: 0,
        animationDurationUpdate: 2000,
        animationEasing: 'linear',
        animationEasingUpdate: 'linear'
    };

    return (
        <div className=''>
            <div className='h-[250px] md:h-[180px] shadow-md rounded-lg px-5 pt-5'>
                <ul className='grid grid-cols-4 place-items-center md:gap-x-10'>
                    <li className='px-4 h-[140px] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] rounded-lg text-black 
                        md:w-[190px] w-[270px] flex items-center justify-center flex-col bg-[#BFDBFE]'>
                        <h1 className='text-[24px] font-bold'>0.25 USD</h1>
                        <hr className='border-1 mb-2 border-[#64748B] w-full' />
                        <p className='font-medium'>ຈຳນວນເງິນປັນຜົນ</p>
                    </li>
                    <li className='px-4 h-[140px] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] rounded-lg text-black 
                        md:w-[190px] w-[270px] flex items-center justify-center flex-col bg-[#F5D0FE]'>
                        <h1 className='text-[24px] font-bold'>0.5 %</h1>
                        <hr className='border-1 mb-2 border-[#64748B] w-full' />
                        <p className='font-medium'>ອັດຕາເງິນປັນຜົນເປັນເປີເຊັນ</p>
                    </li>
                    <li className='px-4 h-[140px] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] rounded-lg text-black 
                        md:w-[190px] w-[270px] flex items-center justify-center flex-col bg-[#FECACA]'>
                        <h1 className='text-[24px] font-bold'>0.22 USD</h1>
                        <hr className='border-1 mb-2 border-[#64748B] w-full' />
                        <p className='font-medium'>ປັນຜົນຄາດຄະເນ</p>
                    </li>
                    <li className='px-4 h-[140px] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] rounded-lg text-black 
                        md:w-[190px] w-[270px] flex items-center justify-center flex-col bg-[#FED7AA]'>
                        <h1 className='text-[24px] font-bold'>15 USD</h1>
                        <hr className='border-1 mb-2 border-[#64748B] w-full' />
                        <p className='font-medium'>ລາຄາເໝາະສົມ</p>
                    </li>
                </ul>
            </div>

            <div className='shadow-md rounded-lg mt-10 py-4 px-8'>
                <h1 className='text-gray-800 text-[20px] font-semibold'>
                    ອັດຕາສ່ວນທາງການເງິນ ແລະ ເງິນປັນຜົນ
                </h1>
                <ReactECharts option={option} className='w-full' />
                <div className=' mt-10 pb-10'>
                    <table className=' w-full '>
                        <thead>
                            <tr className=' text-gray-500 border-b-2 w-full '>
                                <th className='font-medium text-[15px] py-4 w-[400px]  px-5 text-start'>ສະກຸນເງິນ: USD</th>
                                <th className='font-semibold text-[16px] py-4 w-[100px]'>2024</th>
                                <th className='font-semibold text-[16px] py-4 w-[100px]'>2023</th>
                                <th className='font-semibold text-[16px] py-4 w-[100px]'>2022</th>
                                <th className='font-semibold text-[16px] py-4 w-[100px]'>2021</th>
                                <th className='font-semibold text-[16px] py-4 w-[100px]'>2020</th>
                                <th className='font-semibold text-[16px] py-4 w-[100px]'>2019</th>
                                <th className='font-semibold text-[16px] py-4 w-[100px]'>2018</th>
                                <th className='font-semibold text-[16px] py-4 w-[100px]'>2017</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className=" relative after:absolute after:left-[-20px] after:border-deep-orange-500 after:h-[90%] after:-translate-y-1/2 after:top-[50%] after:content-[''] after:z-50 after:border-l-[15px] text-[#003049] h-[70px] border-b-2 w-full">

                                <td className='font-medium text-[18px] text-start w-[100px] pl-5'>
                                    <p className=' font-bold'>
                                        ເງິນປັນຜົນ/ຫຸ້ນ
                                    </p>
                                </td>
                                <td className='font-medium text-[15px] text-center w-[100px]'>
                                    <p className=' font-semibold'>
                                        1,9
                                    </p>
                                </td>
                                <td className='font-medium text-[15px] text-center w-[100px]'>
                                    0,7
                                </td>
                                <td className='font-medium text-[15px] text-center w-[100px]'>
                                    <p className=' font-semibold'>
                                        1,5
                                    </p>
                                </td>
                                <td className='font-medium text-[15px] text-center w-[100px]'>
                                    1,0
                                </td>
                                <td className='font-medium text-[15px] text-center w-[100px]'>
                                    1,7
                                </td>
                                <td className='font-medium text-[15px] text-center w-[100px]'>
                                    0,5
                                </td>
                                <td className='font-medium text-[15px] text-center w-[100px]'>
                                    2,0
                                </td>
                                <td className='font-medium text-[15px] text-center w-[100px]'>
                                    1,5
                                </td>
                            </tr>

                            <tr className="relative after:absolute after:left-[-20px] after:border-white after:h-[90%] after:-translate-y-1/2 after:top-[50%] after:content-[''] after:z-50 after:border-l-[15px] text-[#003049] h-[70px] border-b-2 w-full">

                                <td className='font-medium text-[18px] text-start w-[100px] pl-5'>
                                    <p className=' font-bold'>
                                        ອັດຕາເງິນປັນຜົນເປັນເປີເຊັນ %
                                    </p>
                                </td>
                                <td className='font-medium text-[15px] text-center w-[100px]'>
                                    <p className=' font-semibold'>
                                        1,9
                                    </p>
                                </td>
                                <td className='font-medium text-[15px] text-center w-[100px]'>
                                    0,7
                                </td>
                                <td className='font-medium text-[15px] text-center w-[100px]'>
                                    <p className=' font-semibold'>
                                        1,5
                                    </p>
                                </td>
                                <td className='font-medium text-[15px] text-center w-[100px]'>
                                    1,0
                                </td>
                                <td className='font-medium text-[15px] text-center w-[100px]'>
                                    1,7
                                </td>
                                <td className='font-medium text-[15px] text-center w-[100px]'>
                                    0,5
                                </td>
                                <td className='font-medium text-[15px] text-center w-[100px]'>
                                    2,0
                                </td>
                                <td className='font-medium text-[15px] text-center w-[100px]'>
                                    1,5
                                </td>
                            </tr>
                            <tr className="relative after:absolute after:left-[-20px] after:border-white after:h-[90%] after:-translate-y-1/2 after:top-[50%] after:content-[''] after:z-50 after:border-l-[15px] text-[#003049] h-[70px] border-b-2 w-full">

                                <td className='font-medium text-[18px] text-start w-[100px] pl-5'>
                                    <p className=' font-bold'>
                                        ອັດຕາການຈ່າຍເງີນ
                                    </p>
                                </td>
                                <td className='font-medium text-[15px] text-center w-[100px]'>
                                    <p className=' font-semibold'>
                                        1,9
                                    </p>
                                </td>
                                <td className='font-medium text-[15px] text-center w-[100px]'>
                                    0,7
                                </td>
                                <td className='font-medium text-[15px] text-center w-[100px]'>
                                    <p className=' font-semibold'>
                                        1,5
                                    </p>
                                </td>
                                <td className='font-medium text-[15px] text-center w-[100px]'>
                                    1,0
                                </td>
                                <td className='font-medium text-[15px] text-center w-[100px]'>
                                    1,7
                                </td>
                                <td className='font-medium text-[15px] text-center w-[100px]'>
                                    0,5
                                </td>
                                <td className='font-medium text-[15px] text-center w-[100px]'>
                                    2,0
                                </td>
                                <td className='font-medium text-[15px] text-center w-[100px]'>
                                    1,5
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className='shadow-md rounded-lg mt-10 py-4 px-8'>
                <div className=' flex items-center justify-between'>
                    <h1 className=' text-deep-orange-500 text-[20px] font-bold'>
                        Financial Ratios
                    </h1>
                    <button className=' h-[35px] flex items-center justify-around w-[100px] text-[18px] font-medium rounded-md bg-[#fff] border-2 border-[#f97316] text-[#f97316]'>
                        <span>
                            ປະຈຳປີ
                        </span>
                        <GoTriangleDown />
                    </button>
                </div>

                <div className=' mt-10 pb-10'>
                    <table className=' w-full '>
                        <thead>
                            <tr className=' text-gray-500 border-b-2 w-full '>
                                <th className='font-medium text-[15px] py-4 w-[400px]  px-5 text-start'>ສະກຸນເງິນ: USD</th>
                                <th className='font-semibold text-[16px] py-4 w-[120px]'>2024</th>
                                <th className='font-semibold text-[16px] py-4 w-[120px]'>2023</th>
                                <th className='font-semibold text-[16px] py-4 w-[120px]'>2022</th>
                                <th className='font-semibold text-[16px] py-4 w-[120px]'>2021</th>
                                <th className='font-semibold text-[16px] py-4 w-[120px]'>2020</th>
                                <th className='font-semibold text-[16px] py-4 w-[120px]'>2019</th>
                                <th className='font-semibold text-[16px] py-4 w-[120px]'>2018</th>
                                <th className='font-semibold text-[16px] py-4 w-[120px]'>2017</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="  text-[#003049] h-[70px] border-b-2 w-full">
                                <td colSpan={9} className='font-medium bg-[#4E7D98] text-white text-[18px] text-start w-[100px] pl-5'>
                                    <p className=' font-bold'>
                                        ອັດຕາສ່ວນສະພາບຄ່ອງ
                                    </p>
                                </td>
                            </tr>

                            <tr className="  text-[#003049] h-[70px] border-b-2 w-full">
                                <td className='font-medium text-[18px] text-start w-[100px] pl-5'>
                                    <p className=' font-bold'>
                                        ອັດຕາສ່ວນສະພາບຄ່ອງ
                                    </p>
                                </td>
                                <td className='font-medium text-[15px] text-center w-[100px]'>
                                    <p className=' font-medium'>
                                        58.35548%
                                    </p>
                                </td>
                                <td className='font-medium text-[15px] text-center w-[100px]'>
                                    <p className=' font-medium'>
                                        58.35548%
                                    </p>
                                </td>
                                <td className='font-medium text-[15px] text-center w-[100px]'>
                                    <p className=' font-medium'>
                                        58.35548%
                                    </p>
                                </td>
                                <td className='font-medium text-[15px] text-center w-[100px]'>
                                    <p className=' font-medium'>
                                        58.35548%
                                    </p>
                                </td>
                                <td className='font-medium text-[15px] text-center w-[100px]'>
                                    <p className=' font-medium'>
                                        58.35548%
                                    </p>
                                </td>
                                <td className='font-medium text-[15px] text-center w-[100px]'>
                                    <p className=' font-medium'>
                                        58.35548%
                                    </p>
                                </td>
                                <td className='font-medium text-[15px] text-center w-[100px]'>
                                    <p className=' font-medium'>
                                        58.35548%
                                    </p>
                                </td>
                                <td className='font-medium text-[15px] text-center w-[100px]'>
                                    <p className=' font-medium'>
                                        58.35548%
                                    </p>
                                </td>
                            </tr>

                            <tr className="  text-[#003049] h-[70px] border-b-2 w-full">
                                <td className='font-semibold text-[18px] text-start w-[100px] pl-5'>
                                    <p className=' font-bold'>
                                        ອັດຕາສ່ວນດ່ວນ
                                    </p>
                                </td>
                                <td className='font-medium text-[15px] text-center w-[100px]'>
                                    <p className=' font-medium'>
                                        58.35548%
                                    </p>
                                </td>
                                <td className='font-medium text-[15px] text-center w-[100px]'>
                                    <p className=' font-medium'>
                                        58.35548%
                                    </p>
                                </td>
                                <td className='font-medium text-[15px] text-center w-[100px]'>
                                    <p className=' font-medium'>
                                        58.35548%
                                    </p>
                                </td>
                                <td className='font-medium text-[15px] text-center w-[100px]'>
                                    <p className=' font-medium'>
                                        58.35548%
                                    </p>
                                </td>
                                <td className='font-medium text-[15px] text-center w-[100px]'>
                                    <p className=' font-medium'>
                                        58.35548%
                                    </p>
                                </td>
                                <td className='font-medium text-[15px] text-center w-[100px]'>
                                    <p className=' font-medium'>
                                        58.35548%
                                    </p>
                                </td>
                                <td className='font-medium text-[15px] text-center w-[100px]'>
                                    <p className=' font-medium'>
                                        58.35548%
                                    </p>
                                </td>
                                <td className='font-medium text-[15px] text-center w-[100px]'>
                                    <p className=' font-medium'>
                                        58.35548%
                                    </p>
                                </td>
                            </tr>

                            <tr className="  text-[#003049] h-[70px] border-b-2 w-full">
                                <td className='font-medium text-[18px] text-start w-[100px] pl-5'>
                                    <p className=' font-semibold'>
                                        ອັດຕາສ່ວນເງິນສົດ
                                    </p>
                                </td>
                                <td className='font-medium text-[15px] text-center w-[100px]'>
                                    <p className=' font-medium'>
                                        58.35548%
                                    </p>
                                </td>
                                <td className='font-medium text-[15px] text-center w-[100px]'>
                                    <p className=' font-medium'>
                                        58.35548%
                                    </p>
                                </td>
                                <td className='font-medium text-[15px] text-center w-[100px]'>
                                    <p className=' font-medium'>
                                        58.35548%
                                    </p>
                                </td>
                                <td className='font-medium text-[15px] text-center w-[100px]'>
                                    <p className=' font-medium'>
                                        58.35548%
                                    </p>
                                </td>
                                <td className='font-medium text-[15px] text-center w-[100px]'>
                                    <p className=' font-medium'>
                                        58.35548%
                                    </p>
                                </td>
                                <td className='font-medium text-[15px] text-center w-[100px]'>
                                    <p className=' font-medium'>
                                        58.35548%
                                    </p>
                                </td>
                                <td className='font-medium text-[15px] text-center w-[100px]'>
                                    <p className=' font-medium'>
                                        58.35548%
                                    </p>
                                </td>
                                <td className='font-medium text-[15px] text-center w-[100px]'>
                                    <p className=' font-medium'>
                                        58.35548%
                                    </p>
                                </td>
                            </tr>

                            <tr className="  text-[#003049] h-[70px] border-b-2 w-full">
                                <td colSpan={9} className='font-medium bg-[#4E7D98] text-white text-[18px] text-start w-[100px] pl-5'>
                                    <p className=' font-bold'>
                                        ອັດຕາສ່ວນຄວາມສາມາດໃນການທຳກຳໄລ
                                    </p>
                                </td>
                            </tr>
                            <tr className="  text-[#003049] h-[70px] border-b-2 w-full">
                                <td className='font-medium text-[18px] text-start w-[100px] pl-5'>
                                    <p className=' font-semibold'>
                                        ອັດຕາກຳໄລຂັ້ນຕົ້ນ
                                    </p>
                                </td>
                                <td className='font-medium text-[15px] text-center w-[100px]'>
                                    <p className=' font-medium'>
                                        58.35548%
                                    </p>
                                </td>
                                <td className='font-medium text-[15px] text-center w-[100px]'>
                                    <p className=' font-medium'>
                                        58.35548%
                                    </p>
                                </td>
                                <td className='font-medium text-[15px] text-center w-[100px]'>
                                    <p className=' font-medium'>
                                        58.35548%
                                    </p>
                                </td>
                                <td className='font-medium text-[15px] text-center w-[100px]'>
                                    <p className=' font-medium'>
                                        58.35548%
                                    </p>
                                </td>
                                <td className='font-medium text-[15px] text-center w-[100px]'>
                                    <p className=' font-medium'>
                                        58.35548%
                                    </p>
                                </td>
                                <td className='font-medium text-[15px] text-center w-[100px]'>
                                    <p className=' font-medium'>
                                        58.35548%
                                    </p>
                                </td>
                                <td className='font-medium text-[15px] text-center w-[100px]'>
                                    <p className=' font-medium'>
                                        58.35548%
                                    </p>
                                </td>
                                <td className='font-medium text-[15px] text-center w-[100px]'>
                                    <p className=' font-medium'>
                                        58.35548%
                                    </p>
                                </td>
                            </tr>

                            <tr className="  text-[#003049] h-[70px] border-b-2 w-full">
                                <td className='font-medium text-[18px] text-start w-[100px] pl-5'>
                                    <p className=' font-semibold'>
                                        ອັດຕາກຳໄລຈາກການດຳເນີນງານ
                                    </p>
                                </td>
                                <td className='font-medium text-[15px] text-center w-[100px]'>
                                    <p className=' font-medium'>
                                        18.41651%
                                    </p>
                                </td>
                                <td className='font-medium text-[15px] text-center w-[100px]'>
                                    <p className=' font-medium'>
                                        18.41651%
                                    </p>
                                </td>
                                <td className='font-medium text-[15px] text-center w-[100px]'>
                                    <p className=' font-medium'>
                                        18.41651%
                                    </p>
                                </td>
                                <td className='font-medium text-[15px] text-center w-[100px]'>
                                    <p className=' font-medium'>
                                        18.41651%
                                    </p>
                                </td>
                                <td className='font-medium text-[15px] text-center w-[100px]'>
                                    <p className=' font-medium'>
                                        18.41651%
                                    </p>
                                </td>
                                <td className='font-medium text-[15px] text-center w-[100px]'>
                                    <p className=' font-medium'>
                                        18.41651%
                                    </p>
                                </td>
                                <td className='font-medium text-[15px] text-center w-[100px]'>
                                    <p className=' font-medium'>
                                        18.41651%
                                    </p>
                                </td>
                                <td className='font-medium text-[15px] text-center w-[100px]'>
                                    <p className=' font-medium'>
                                        18.41651%
                                    </p>
                                </td>
                            </tr>

                            <tr className="  text-[#003049] h-[70px] border-b-2 w-full">
                                <td className='font-medium text-[18px] text-start w-[100px] pl-5'>
                                    <p className=' font-semibold'>
                                        ອັດຕາກຳໄລກ່ອນຫັກພາສິ
                                    </p>
                                </td>
                                <td className='font-medium text-[15px] text-center w-[100px]'>
                                    <p className=' font-medium'>
                                        11.8494%
                                    </p>
                                </td>
                                <td className='font-medium text-[15px] text-center w-[100px]'>
                                    <p className=' font-medium'>
                                        11.8494%
                                    </p>
                                </td>
                                <td className='font-medium text-[15px] text-center w-[100px]'>
                                    <p className=' font-medium'>
                                        11.8494%
                                    </p>
                                </td>
                                <td className='font-medium text-[15px] text-center w-[100px]'>
                                    <p className=' font-medium'>
                                        11.8494%
                                    </p>
                                </td>
                                <td className='font-medium text-[15px] text-center w-[100px]'>
                                    <p className=' font-medium'>
                                        11.8494%
                                    </p>
                                </td>
                                <td className='font-medium text-[15px] text-center w-[100px]'>
                                    <p className=' font-medium'>
                                        11.8494%
                                    </p>
                                </td>
                                <td className='font-medium text-[15px] text-center w-[100px]'>
                                    <p className=' font-medium'>
                                        11.8494%
                                    </p>
                                </td>
                                <td className='font-medium text-[15px] text-center w-[100px]'>
                                    <p className=' font-medium'>
                                        11.8494%
                                    </p>
                                </td>
                            </tr>

                            <tr className="  text-[#003049] h-[70px] border-b-2 w-full">
                                <td className='font-medium text-[18px] text-start w-[100px] pl-5'>
                                    <p className=' font-semibold'>
                                        Profit Margin
                                    </p>
                                </td>
                                <td className='font-medium text-[15px] text-center w-[100px]'>
                                    <p className=' font-medium'>
                                        11.8494%
                                    </p>
                                </td>
                                <td className='font-medium text-[15px] text-center w-[100px]'>
                                    <p className=' font-medium'>
                                        11.8494%
                                    </p>
                                </td>
                                <td className='font-medium text-[15px] text-center w-[100px]'>
                                    <p className=' font-medium'>
                                        11.8494%
                                    </p>
                                </td>
                                <td className='font-medium text-[15px] text-center w-[100px]'>
                                    <p className=' font-medium'>
                                        11.8494%
                                    </p>
                                </td>
                                <td className='font-medium text-[15px] text-center w-[100px]'>
                                    <p className=' font-medium'>
                                        11.8494%
                                    </p>
                                </td>
                                <td className='font-medium text-[15px] text-center w-[100px]'>
                                    <p className=' font-medium'>
                                        11.8494%
                                    </p>
                                </td>
                                <td className='font-medium text-[15px] text-center w-[100px]'>
                                    <p className=' font-medium'>
                                        11.8494%
                                    </p>
                                </td>
                                <td className='font-medium text-[15px] text-center w-[100px]'>
                                    <p className=' font-medium'>
                                        11.8494%
                                    </p>
                                </td>
                            </tr>

                            <tr className="  text-[#003049] h-[70px] border-b-2 w-full">
                                <td className='font-medium text-[18px] text-start w-[100px] pl-5'>
                                    <p className=' font-semibold'>
                                        ROE ກ່ອນຫັກພາສີ
                                    </p>
                                </td>
                                <td className='font-medium text-[15px] text-center w-[100px]'>
                                    <p className=' font-medium'>
                                        5.3738%
                                    </p>
                                </td>
                                <td className='font-medium text-[15px] text-center w-[100px]'>
                                    <p className=' font-medium'>
                                        5.3738%
                                    </p>
                                </td>
                                <td className='font-medium text-[15px] text-center w-[100px]'>
                                    <p className=' font-medium'>
                                        5.3738%
                                    </p>
                                </td>
                                <td className='font-medium text-[15px] text-center w-[100px]'>
                                    <p className=' font-medium'>
                                        5.3738%
                                    </p>
                                </td>
                                <td className='font-medium text-[15px] text-center w-[100px]'>
                                    <p className=' font-medium'>
                                        5.3738%
                                    </p>
                                </td>
                                <td className='font-medium text-[15px] text-center w-[100px]'>
                                    <p className=' font-medium'>
                                        5.3738%
                                    </p>
                                </td>
                                <td className='font-medium text-[15px] text-center w-[100px]'>
                                    <p className=' font-medium'>
                                        5.3738%
                                    </p>
                                </td>
                                <td className='font-medium text-[15px] text-center w-[100px]'>
                                    <p className=' font-medium'>
                                        5.3738%
                                    </p>
                                </td>
                            </tr>

                            <tr className="  text-[#003049] h-[70px] border-b-2 w-full">
                                <td className='font-medium text-[18px] text-start w-[100px] pl-5'>
                                    <p className=' font-semibold'>
                                        ຫລັງຫັກພາສີ ROE
                                    </p>
                                </td>
                                <td className='font-medium text-[15px] text-center w-[100px]'>
                                    <p className=' font-medium'>
                                        5.3738%
                                    </p>
                                </td>
                                <td className='font-medium text-[15px] text-center w-[100px]'>
                                    <p className=' font-medium'>
                                        5.3738%
                                    </p>
                                </td>
                                <td className='font-medium text-[15px] text-center w-[100px]'>
                                    <p className=' font-medium'>
                                        5.3738%
                                    </p>
                                </td>
                                <td className='font-medium text-[15px] text-center w-[100px]'>
                                    <p className=' font-medium'>
                                        5.3738%
                                    </p>
                                </td>
                                <td className='font-medium text-[15px] text-center w-[100px]'>
                                    <p className=' font-medium'>
                                        5.3738%
                                    </p>
                                </td>
                                <td className='font-medium text-[15px] text-center w-[100px]'>
                                    <p className=' font-medium'>
                                        5.3738%
                                    </p>
                                </td>
                                <td className='font-medium text-[15px] text-center w-[100px]'>
                                    <p className=' font-medium'>
                                        5.3738%
                                    </p>
                                </td>
                                <td className='font-medium text-[15px] text-center w-[100px]'>
                                    <p className=' font-medium'>
                                        5.3738%
                                    </p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}