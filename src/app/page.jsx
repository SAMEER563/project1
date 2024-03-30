import Image from "next/image";
import styles from "./home.module.css";
import Link from "next/link";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item1}>
        <div className={styles.t1}>List of Restaurants</div>
        <div className={styles.lBar}>
          <span>regio de Montreal</span>
          <li>Laval </li>
          <li>Monteregie Ouest </li>
          <li>Rive Nord</li>
          <li>Lanaudiere</li>
          <li>Centre de Montreal</li>
          <li>Est de Montreal </li>
          <li>Ouest de Montreal</li>
          <li>Monteregie Nord</li>
          <li>Rive Sud</li>
          <li>Autres regions du Quebec</li>
        </div>
      </div>

      <div className={styles.item2}>
        <div className={styles.midText}>
          Grande région de Montréal</div>
        <Image src="/img.png" alt="" fill className={styles.midImg} />
      </div>

      <div className={styles.item3}>
        <Image src="/r_img.png" alt="" fill className={styles.rImg} />
      </div>

      <div className={styles.item4}>
        <div className={styles.titleBar}>
          <span>Recherche Rapide</span>
        
        <div className={styles.ltBar}>
          <select className={styles.uSelect}>
            <option>region - toutes</option>
            <option>name</option>
            <option>name</option>
            <option>name</option>
            <option>name</option>
          </select>
          <select className={styles.uSelect}>
            <option>types of cusines - toutes</option>
            <option>name</option>
            <option>name</option>
            <option>name</option>
            <option>name</option>
          </select>
          <select className={styles.uSelect}>
            <option>prix mmoyen- toutes</option>
            <option>name</option>
            <option>name</option>
            <option>name</option>
            <option>name</option>
          </select>
          
            {" "}
            ou par:
        
                <input
                  type="text"
                  className={styles.uformControl}
                  placeholder="Nom de restaurant"
                ></input>
              
           
          </div>
            <Link href="#" className={styles.menuButton}>
              rechercher
            </Link>
        </div>
      </div>

      <div className={styles.item5}>
        <div className={styles.ml1}>
          <div className={styles.owlSlider}>
            <Image src="/shop-11.jpg" alt="" fill />
          </div>
          <div className={styles.textMbar}>
            <Link href="#">Resto A</Link>
          </div>
          <div className={styles.ab}>
            <h5>type of cuisine</h5>
            <span>1701,boul.the name,</span>
            <br />
            City
            <span>x514-4775-554</span>
            <button className={styles.btn}>plus</button>
          </div>
        </div>

        
        <div className={styles.ml2}>
        <div className={styles.owlSlider}>
            <Image src="/shop-11.jpg" alt="" fill />
          </div>
          <div className={styles.textMbar}>
            <Link href="#">Resto B</Link>
          </div>
          <div className={styles.ab}>
            <h5>type of cuisine</h5>
            <span>1701,boul.the name,</span>
            <br />
            City
            <span>x514-4775-554</span>
            <button className={styles.btn}>plus</button>
          </div>
        </div>
        <div className={styles.ml3}>
        <div className={styles.owlSlider}>
            <Image src="/shop-11.jpg" alt="" fill />
          </div>
          <div className={styles.textMbar}>
            <Link href="#">Resto C</Link>
          </div>
          <div className={styles.ab}>
            <h5>type of cuisine</h5>
            <span>1701,boul.the name,</span>
            <br />
            City
            <span>x514-4775-554</span>
            <button className={styles.btn}>plus</button>
          </div>
        </div>
        <div className={styles.ml4}>
        <div className={styles.owlSlider}>
            <Image src="/shop-11.jpg" alt="" fill />
          </div>
          <div className={styles.textMbar}>
            <Link href="#">Resto D</Link>
          </div>
          <div className={styles.ab}>
            <h5>type of cuisine</h5>
            <span>1701,boul.the name,</span>
            <br />
            City
            <span>x514-4775-554</span>
            <button className={styles.btn}>plus</button>
          </div>
        </div>
      </div>
      <div className={styles.item7}>
      <Image src="/r_img.png" alt="" fill className={styles.rImg} />
      </div>
      <div className={styles.item6}>
        <div className={styles.textLbar}>
         <span>--- Le concept Apport Votre Vin!---</span>
         <p>Le concept Apportez Votre Vin AVV, est en plein essor au Québec et se veut très différent des autres pays, puisque aucun droit de bouchon n’est exigé et il est obligatoire que les restaurants détiennent un permis dalcool. Cest donc un concept unique au 
          <br />
          Québec !
        <br />
Malgré le fait quau Québec, le restaurateur doit fournir la verrerie à ses clients, il n’y a aucun frais pour le service du vin à la table, que ce soit pour le servir dans un récipient de glace ou encore pour ouvrir la bouteille. Il y a de quoi être fier de nos restaurateurs québécois ! Découvrez-en plus!</p>
            <Link href="#" className={styles.bButton}>
              Visitez notre blogue
            </Link>
            </div>
      </div>
      <div className={styles.item8}>
      <div className={styles.btBar}>
          <span>Recherche Rapide</span>
        
        <div className={styles.bBar}>
          <select className={styles.select}>
            <option>region - toutes</option>
            <option>name</option>
            <option>name</option>
            <option>name</option>
            <option>name</option>
          </select>
          <select className={styles.select}>
            <option>types of cusines - toutes</option>
            <option>name</option>
            <option>name</option>
            <option>name</option>
            <option>name</option>
          </select>
          <select className={styles.select}>
            <option>prix mmoyen- toutes</option>
            <option>name</option>
            <option>name</option>
            <option>name</option>
            <option>name</option>
          </select>
        

            {" "}
            ou par:
                <input 
                  type="text"
                  className={styles.formControl}
                  placeholder="Nom de restaurant"
                ></input>
              
            </div>
            <Link href="#" className={styles.menuBtn}>
              rechercher
            </Link>
          </div>
          <div className={styles.bImg}>
            <Image src="/avv.png" alt="" fill className={styles.avvImg} />
          </div>
        </div>
      </div>
    
  );
};

export default Home;
