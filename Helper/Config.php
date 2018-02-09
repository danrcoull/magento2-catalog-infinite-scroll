<?php

namespace SuttonSilver\InfiniteScroll\Helper;
use \Magento\Framework\App\Helper\AbstractHelper;

class Config extends AbstractHelper {

    const BASE = 'infinitescroll/';
    const ENABLED = self::BASE.'general/enabled';
    const IMAGE = self::BASE.'general/upload_image_id';
    const SCROLL = self::BASE.'general/load_on_scroll';


    protected $_storeManager;

    public function __construct(
        \Magento\Store\Model\StoreManagerInterface $storeManager,
        \Magento\Framework\App\Helper\Context $context)
    {
        parent::__construct($context);
        $this->_storeManager = $storeManager;
    }
    public function isEnabled()
    {
        if(!$this->scopeConfig->getValue(self::ENABLED, 'store'))
        {
            return false;
        }

        return true;
    }

    public function loadOnScroll()
    {
        if(!$this->scopeConfig->getValue(self::SCROLL, 'store'))
        {
            return false;
        }

        return true;
    }

    public function getImageId(){
        if($imgname = $this->scopeConfig->getValue(self::IMAGE, 'store'))
        {
            return '/pub/media/loading/' .$this->_storeManager->getStore()->getCode().'/'. $imgname;
        }

        return "https://infinite-scroll.com/loading.gif";
    }

}