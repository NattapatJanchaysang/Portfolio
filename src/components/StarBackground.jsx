import { useEffect, useState } from 'react'


export const StarBackground = () => { // สร้างพื้นหลังดาวและดาวตก
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  useEffect(() => { /* สร้างดาวและดาวตกเมื่อโหลดหน้า */
    generateStars();
    generateMeteors();

    const handleResize = () => { /* ฟังก์ชันจัดการเมื่อขนาดหน้าต่างเปลี่ยนแปลง */
      generateStars();
    };

    window.addEventListener("resize", handleResize); /* เพิ่ม event listener เมื่อขนาดหน้าต่างเปลี่ยนแปลง */

    return () => window.removeEventListener("resize", handleResize); /* ลบ event listener เมื่อ component ถูกทำลาย */
  }, []);

  const generateStars = () => { /* ฟังก์ชันสร้างดาว */
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000
    );

    const newStars = [];

    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2,
      });
    }

    setStars(newStars);
  };

  const generateMeteors = () => { /* ฟังก์ชันสร้างดาวตก */
    const numberOfMeteors = 4;
    const newMeteors = [];

    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 20,
        delay: Math.random() * 15,
        animationDuration: Math.random() * 3 + 3,
      });
    }

    setMeteors(newMeteors);
  };


    return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => ( 
        <div
          key={star.id} /* ใช้ id เป็น key */
          className="star animate-pulse-subtle" /*ดึง Class ที่สร้่างใน index.css มาใช้ */
          style={{
            width: star.size + "px", /* กำหนดขนาดดาว */
            height: star.size + "px", /* กำหนดขนาดดาว */
            left: star.x + "%", /* กำหนดตำแหน่งซ้าย */
            top: star.y + "%", /* กำหนดตำแหน่งบน */
            opacity: star.opacity, /* กำหนดความทึบ */
            animationDuration: star.animationDuration + "s", /* กำหนดความเร็วการกระพริบ */
          }} 
        />
      ))} 

      {meteors.map((meteor) => ( 
        <div
          key={meteor.id} /* ใช้ id เป็น key */
          className="meteor animate-meteor" /* ดึง Class ที่สร้่างใน index.css มาใช้ */
          style={{
            width: meteor.size * 50 + "px", /* กำหนดความยาวดาวตก */
            height: meteor.size * 2 + "px", /* กำหนดความกว้างดาวตก */
            left: meteor.x + "%",  /* กำหนดตำแหน่งซ้าย */
            top: meteor.y + "%", /* กำหนดตำแหน่งบน */
            animationDelay: meteor.delay, /* กำหนดหน่วงเวลาเริ่มต้น */
            animationDuration: meteor.animationDuration + "s", /* กำหนดความเร็วการเคลื่อนที่*/
          }}
        />
      ))} 
    </div>
  );
};